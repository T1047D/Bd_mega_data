const categories = [
  {id:"education",name:"Education",bn:"শিক্ষা",icon:"▤",desc:"Schools, colleges & universities"},
  {id:"healthcare",name:"Healthcare",bn:"স্বাস্থ্যসেবা",icon:"✚",desc:"Hospitals, clinics & diagnostics"},
  {id:"business",name:"Business",bn:"ব্যবসা",icon:"▣",desc:"Companies, shops & industries"},
  {id:"government",name:"Government",bn:"সরকারি প্রতিষ্ঠান",icon:"⌂",desc:"Offices & public administration"},
  {id:"tourism",name:"Tourism",bn:"পর্যটন",icon:"⌑",desc:"Attractions & heritage places"},
  {id:"transport",name:"Transport",bn:"পরিবহন",icon:"⇄",desc:"Stations & transport terminals"},
  {id:"banking",name:"Banking",bn:"ব্যাংকিং",icon:"▥",desc:"Banks & ATM locations"},
  {id:"emergency",name:"Emergency Services",bn:"জরুরি সেবা",icon:"✳",desc:"Fire & emergency facilities"},
  {id:"religious",name:"Religious Institutions",bn:"ধর্মীয় প্রতিষ্ঠান",icon:"◇",desc:"Public places of worship"},
  {id:"agriculture",name:"Agriculture",bn:"কৃষি",icon:"❋",desc:"Agriculture offices & services"},
  {id:"geography",name:"Geography",bn:"ভৌগোলিক তথ্য",icon:"⌖",desc:"Divisions, districts & upazilas"},
  {id:"statistics",name:"Public Statistics",bn:"জনপরিসংখ্যান",icon:"▥",desc:"Population & public indicators"}
];

const divisions = {
  "Barishal":["Barguna","Barishal","Bhola","Jhalokati","Patuakhali","Pirojpur"],
  "Chattogram":["Bandarban","Brahmanbaria","Chandpur","Chattogram","Cumilla","Cox's Bazar","Feni","Khagrachhari","Lakshmipur","Noakhali","Rangamati"],
  "Dhaka":["Dhaka","Faridpur","Gazipur","Gopalganj","Kishoreganj","Madaripur","Manikganj","Munshiganj","Narayanganj","Narsingdi","Rajbari","Shariatpur","Tangail"],
  "Khulna":["Bagerhat","Chuadanga","Jashore","Jhenaidah","Khulna","Kushtia","Magura","Meherpur","Narail","Satkhira"],
  "Mymensingh":["Jamalpur","Mymensingh","Netrokona","Sherpur"],
  "Rajshahi":["Bogura","Chapainawabganj","Joypurhat","Naogaon","Natore","Pabna","Rajshahi","Sirajganj"],
  "Rangpur":["Dinajpur","Gaibandha","Kurigram","Lalmonirhat","Nilphamari","Panchagarh","Rangpur","Thakurgaon"],
  "Sylhet":["Habiganj","Moulvibazar","Sunamganj","Sylhet"]
};

const records = [
  {id:"DEMO-EDU-001",name:"Sample Government College",category:"education",district:"Dhaka",division:"Dhaka",upazila:"Dhaka Sadar",address:"Dhaka, Bangladesh",description:"Illustrative education directory entry. Replace with a verified official record.",source:"Demo content",status:"Demo only"},
  {id:"DEMO-EDU-002",name:"Sample Public High School",category:"education",district:"Chattogram",division:"Chattogram",upazila:"Chattogram Sadar",address:"Chattogram, Bangladesh",description:"Illustrative school listing for the website preview.",source:"Demo content",status:"Demo only"},
  {id:"DEMO-HEALTH-001",name:"Sample District Hospital",category:"healthcare",district:"Chuadanga",division:"Khulna",upazila:"Chuadanga Sadar",address:"Chuadanga, Bangladesh",description:"Illustrative healthcare listing. Services and contact details are not real.",source:"Demo content",status:"Demo only"},
  {id:"DEMO-HEALTH-002",name:"Sample Community Clinic",category:"healthcare",district:"Sylhet",division:"Sylhet",upazila:"Sylhet Sadar",address:"Sylhet, Bangladesh",description:"A sample entry showing how public health facilities may appear.",source:"Demo content",status:"Demo only"},
  {id:"DEMO-BIZ-001",name:"Sample Local Market",category:"business",district:"Rajshahi",division:"Rajshahi",upazila:"Rajshahi Sadar",address:"Rajshahi, Bangladesh",description:"Placeholder for a public market or business-area listing.",source:"Demo content",status:"Demo only"},
  {id:"DEMO-GOV-001",name:"Sample Upazila Office",category:"government",district:"Cumilla",division:"Chattogram",upazila:"Cumilla Sadar",address:"Cumilla, Bangladesh",description:"Illustrative government-office record for layout testing.",source:"Demo content",status:"Demo only"},
  {id:"DEMO-TOUR-001",name:"Sample Heritage Site",category:"tourism",district:"Bagerhat",division:"Khulna",upazila:"Bagerhat Sadar",address:"Bagerhat, Bangladesh",description:"Placeholder for a public tourist attraction or heritage site.",source:"Demo content",status:"Demo only"},
  {id:"DEMO-TRANS-001",name:"Sample Railway Station",category:"transport",district:"Mymensingh",division:"Mymensingh",upazila:"Mymensingh Sadar",address:"Mymensingh, Bangladesh",description:"Illustrative transport listing; no live schedule information.",source:"Demo content",status:"Demo only"},
  {id:"DEMO-BANK-001",name:"Sample Bank Branch",category:"banking",district:"Bogura",division:"Rajshahi",upazila:"Bogura Sadar",address:"Bogura, Bangladesh",description:"Placeholder for a bank branch or ATM location.",source:"Demo content",status:"Demo only"},
  {id:"DEMO-EMER-001",name:"Sample Fire Service Station",category:"emergency",district:"Barishal",division:"Barishal",upazila:"Barishal Sadar",address:"Barishal, Bangladesh",description:"Illustrative emergency-service directory entry.",source:"Demo content",status:"Demo only"},
  {id:"DEMO-AGRI-001",name:"Sample Agriculture Office",category:"agriculture",district:"Rangpur",division:"Rangpur",upazila:"Rangpur Sadar",address:"Rangpur, Bangladesh",description:"Placeholder for an agriculture extension office.",source:"Demo content",status:"Demo only"},
  {id:"DEMO-REL-001",name:"Sample Public Place of Worship",category:"religious",district:"Patuakhali",division:"Barishal",upazila:"Patuakhali Sadar",address:"Patuakhali, Bangladesh",description:"Illustrative public institution entry; not a real listing.",source:"Demo content",status:"Demo only"}
];

const $ = s => document.querySelector(s);
const categoryName = id => categories.find(c=>c.id===id)?.name || id;
const categoryIcon = id => categories.find(c=>c.id===id)?.icon || "◈";
const toast = message => { const el=$("#toast"); el.textContent=message; el.classList.add("show"); clearTimeout(window.__toastTimer); window.__toastTimer=setTimeout(()=>el.classList.remove("show"),2600); };

function renderCategories(){
  $("#categoryGrid").innerHTML=categories.map(c=>`<button class="category-card" data-category="${c.id}"><span class="category-arrow">↗</span><span class="category-icon">${c.icon}</span><strong>${c.name}</strong><small>${c.desc}</small></button>`).join("");
  $("#categoryFilter").innerHTML='<option value="all">All categories</option>'+categories.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");
}
function renderRecords(list=records){
  $("#recordCount").textContent=records.length;
  $("#recordGrid").innerHTML=list.map(r=>`<article class="record-card"><div class="record-top"><span class="record-category">${categoryName(r.category).toUpperCase()}</span><span class="record-status">● ${r.status}</span></div><h3>${escapeHTML(r.name)}</h3><div class="record-location">⌖ ${escapeHTML(r.district)}, ${escapeHTML(r.division)}</div><p class="record-description">${escapeHTML(r.description)}</p><div class="record-bottom"><small>ID: ${r.id}</small><button data-detail="${r.id}">View details ↗</button></div></article>`).join("");
  $("#emptyState").hidden=list.length!==0;
  $("#recordGrid").hidden=list.length===0;
}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function searchRecords(){
  const q=$("#searchInput").value.trim().toLowerCase(), cat=$("#categoryFilter").value;
  const division=$("#divisionSelect").value, district=$("#districtSelect").value;
  const filtered=records.filter(r=>{
    const hay=[r.name,r.category,categoryName(r.category),r.district,r.division,r.upazila,r.address,r.description].join(" ").toLowerCase();
    return (!q||hay.includes(q))&&(cat==="all"||r.category===cat)&&(!division||r.division===division)&&(!district||r.district===district);
  });
  renderRecords(filtered);
  $("#latest").scrollIntoView({behavior:"smooth",block:"start"});
}
function initLocations(){
  Object.keys(divisions).forEach(d=>$("#divisionSelect").add(new Option(d,d)));
  const all=Object.values(divisions).flat().sort();
  all.forEach(d=>$("#districtSelect").add(new Option(d,d)));
  $("#divisionChips").innerHTML=Object.keys(divisions).map(d=>`<button data-division="${d}">${d}</button>`).join("");
  $("#divisionSelect").addEventListener("change",()=>{
    const div=$("#divisionSelect").value;
    $("#districtSelect").innerHTML='<option value="">All districts</option>';
    (div?divisions[div]:all).slice().sort().forEach(d=>$("#districtSelect").add(new Option(d,d)));
    updateLocationSummary();
  });
  $("#districtSelect").addEventListener("change",()=>{
    const d=$("#districtSelect").value;
    if(d){const div=Object.keys(divisions).find(k=>divisions[k].includes(d));$("#divisionSelect").value=div||"";}
    updateLocationSummary();
  });
  $("#divisionChips").addEventListener("click",e=>{
    const b=e.target.closest("[data-division]");if(!b)return;
    $("#divisionSelect").value=b.dataset.division;$("#divisionSelect").dispatchEvent(new Event("change"));
    document.querySelectorAll("#divisionChips button").forEach(x=>x.classList.toggle("selected",x===b));
  });
}
function updateLocationSummary(){
  const d=$("#districtSelect").value, div=$("#divisionSelect").value;
  $("#locationTitle").textContent=d||div||"All of Bangladesh";
  $("#locationSubtitle").textContent=d?`Explore public directory records in ${d}.`:div?`Explore public directory records across ${div} Division.`:"Browse the directory across 8 divisions and 64 districts.";
}
function showDetail(id){
  const r=records.find(x=>x.id===id);if(!r)return;
  $("#detailContent").innerHTML=`<div class="eyebrow dark"><span class="eyebrow-line"></span> DIRECTORY RECORD · DEMO</div><h2>${escapeHTML(r.name)}</h2><p>${escapeHTML(r.description)}</p><div class="detail-meta"><div><small>Category</small><strong>${categoryName(r.category)}</strong></div><div><small>Record ID</small><strong>${r.id}</strong></div><div><small>District</small><strong>${escapeHTML(r.district)}</strong></div><div><small>Division</small><strong>${escapeHTML(r.division)}</strong></div><div><small>Address</small><strong>${escapeHTML(r.address)}</strong></div><div><small>Source</small><strong>${escapeHTML(r.source)}</strong></div></div><p style="margin-top:16px;color:#9a7842">Demo record — do not use as a real-world directory listing.</p>`;
  $("#detailDialog").showModal();
}
renderCategories();renderRecords();initLocations();$("#year").textContent=new Date().getFullYear();

$("#searchForm").addEventListener("submit",e=>{e.preventDefault();searchRecords();});
$("#categoryGrid").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;$("#categoryFilter").value=b.dataset.category;searchRecords();});
$("#recordGrid").addEventListener("click",e=>{const b=e.target.closest("[data-detail]");if(b)showDetail(b.dataset.detail);});
document.querySelectorAll(".popular-searches button").forEach(b=>b.addEventListener("click",()=>{$("#searchInput").value=b.dataset.query;searchRecords();}));
$("#locationSearch").addEventListener("click",searchRecords);
$("#viewAllButton").addEventListener("click",()=>{$("#searchInput").value="";$("#categoryFilter").value="all";$("#divisionSelect").value="";$("#districtSelect").value="";updateLocationSummary();renderRecords();$("#latest").scrollIntoView({behavior:"smooth"});});
$("#clearSearch").addEventListener("click",()=>{$("#searchInput").value="";$("#categoryFilter").value="all";$("#divisionSelect").value="";$("#districtSelect").value="";updateLocationSummary();renderRecords();});
$("#closeDialog").addEventListener("click",()=>$("#detailDialog").close());
$("#adminButton").addEventListener("click",()=>$("#adminDialog").showModal());
$("#closeAdmin").addEventListener("click",()=>$("#adminDialog").close());
$("#adminOkay").addEventListener("click",()=>$("#adminDialog").close());
$("#suggestButton").addEventListener("click",()=>toast("Public suggestions will be enabled after backend setup."));
$("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
$("#mainNav").addEventListener("click",e=>{if(e.target.matches("a"))$("#mainNav").classList.remove("open");});
