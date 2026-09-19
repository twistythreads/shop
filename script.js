// CONFIGURATION - CONTACT NUMBERS
const instagramHandle = "shop.twistythreads"; 
const crochetPhone = "917792018098";      // First Number for Crochets
const pipeCleanerPhone = "919413948673";  // Second Number for Pipe Cleaners

let currentCategory = 'crochets';

// Crochets Data Mapping
const crochetData = {
    1: { price: "₹399", subMedia: [{ type: 'image', src: 'crochets/crochet1.1.jpg' }] },
    2: { price: "₹999", subMedia: [{ type: 'image', src: 'crochets/crochet2.1.jpg' }] },
    3: { price: "₹300", subMedia: [{ type: 'image', src: 'crochets/crochet3.1.jpg' }] },
    4: { 
        price: "₹849", 
        subMedia: [
            { type: 'image', src: 'crochets/crochet4.1.jpg' },
            { type: 'image', src: 'crochets/crochet4.2.jpg' },
            { type: 'image', src: 'crochets/crochet4.3.jpg' },
            { type: 'video', src: 'crochets/crochet4.4.mp4' },
            { type: 'video', src: 'crochets/crochet4.5.mp4' }
        ] 
    },
    6: { 
        price: "₹349", 
        subMedia: [
            { type: 'image', src: 'crochets/crochet6.1.jpg' },
            { type: 'image', src: 'crochets/crochet6.2.jpg' },
            { type: 'image', src: 'crochets/crochet6.3.jpg' },
            { type: 'image', src: 'crochets/crochet6.4.jpg' }
        ] 
    },
    7: { price: "₹1,499", subMedia: [{ type: 'image', src: 'crochets/crochet7.1.jpg' }] },
    8: { price: "₹249", subMedia: [{ type: 'image', src: 'crochets/crochet8.1.jpg' }] },
    9: { price: "₹899", subMedia: [{ type: 'image', src: 'crochets/crochet9.1.jpg' }] },
    10: { 
        price: "₹119", 
        baseImg: 'crochets/crochet10.1.jpg',
        subMedia: [
            { type: 'image', src: 'crochets/crochet10.2.jpg' },
            { type: 'image', src: 'crochets/crochet10.3.jpg' },
            { type: 'image', src: 'crochets/crochet10.4.jpg' }
        ] 
    },
    11: { title: "Crochet bow", price: "₹99", subMedia: [] },
    12: { price: "₹199", subMedia: [] },
    13: { price: "₹299", subMedia: [] },
    14: { title: "Coffee Mug Keychain", price: "₹149", subMedia: [] },
    16: { title: "Sunflower Hair pin", price: "₹169", subMedia: [] },
    17: { 
        title: "Crochet Tote bag + strawberry keychain", 
        price: "₹849", 
        subMedia: [{ type: 'image', src: 'crochets/crochet17.1.jpg' }] 
    },
    18: { title: "Crochet bow hair clip", price: "₹79", subMedia: [] },
    19: { title: "Daisy Keychain", price: "₹99", subMedia: [] },
    20: { title: "Mini bouquet keychain", price: "₹139", subMedia: [] },
    21: { title: "Crochet hair clutcher", price: "₹179", subMedia: [] }
};

// Pipe Cleaners Data Mapping
const pipeCleanerData = {
    1: { price: "₹750", subMedia: [] },
    2: { price: "₹350", subMedia: [] },
    3: { price: "₹179", subMedia: [] },
    4: { price: "₹149", subMedia: [] },
    5: { price: "₹159", subMedia: [] },
    6: { price: "₹99", subMedia: [] },
    7: { price: "₹119", subMedia: [] },
    8: { price: "₹159", subMedia: [] },
    9: { price: "₹199", subMedia: [] },
    10: { price: "₹110", subMedia: [] },
    11: { 
        price: "₹99", 
        subMedia: [
            { type: 'image', src: 'pipe cleaners/pipeCleaner11.1.jpg' },
            { type: 'image', src: 'pipe cleaners/pipeCleaner11.2.jpg' },
            { type: 'image', src: 'pipe cleaners/pipeCleaner11.3.jpg' },
            { type: 'image', src: 'pipe cleaners/pipeCleaner11.4.jpg' }
        ] 
    },
    12: { 
        title: "Lavender Stick", 
        price: "Per piece ₹39 | 10 pieces ₹349", 
        subMedia: [{ type: 'image', src: 'pipe cleaners/pipeCleaner12.1.jpg' }] 
    }
};

// Page Switcher
function showPage(pageId) {
    const detailVideo = document.getElementById("detailVideo");
    if (detailVideo) detailVideo.pause();

    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));

    const activePage = document.getElementById(pageId);
    if (activePage) activePage.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.sidebar-link').forEach(btn => btn.classList.remove('active'));

    if (pageId === 'crochets' || pageId === 'pipe-cleaners') {
        currentCategory = pageId;
    }

    closeDrawer();
}

// Mobile Drawer Handlers
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const closeSidebar = document.getElementById("closeSidebar");

function openDrawer() {
    sidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
}

function closeDrawer() {
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
}

if (menuToggle) menuToggle.addEventListener("click", openDrawer);
if (closeSidebar) closeSidebar.addEventListener("click", closeDrawer);
if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeDrawer);

// Media Switcher inside Product Detail View
const detailImage = document.getElementById("detailImage");
const detailVideo = document.getElementById("detailVideo");
const detailGallery = document.getElementById("detailGallery");
const gallerySection = document.getElementById("gallerySection");
const detailPriceTag = document.getElementById("detailPriceTag");
const detailTitle = document.getElementById("detailTitle");
const detailInstaBtn = document.getElementById("detailInstaBtn");
const detailWaBtn = document.getElementById("detailWaBtn");

function setMainMedia(item) {
    if (item.type === 'video') {
        detailImage.style.display = 'none';
        detailVideo.style.display = 'block';
        detailVideo.src = item.src;
        detailVideo.play();
    } else {
        detailVideo.pause();
        detailVideo.style.display = 'none';
        detailImage.style.display = 'block';
        detailImage.src = item.src;
    }
}

function openProductDetail(category, id) {
    detailGallery.innerHTML = '';
    
    let itemData, baseImgSrc, categoryName, targetPhone;

    if (category === 'crochet') {
        itemData = crochetData[id] || { price: "", subMedia: [] };
        baseImgSrc = itemData.baseImg || `crochets/crochet${id}.jpg`;
        categoryName = "Crochet";
        targetPhone = crochetPhone;
        currentCategory = 'crochets';
    } else {
        itemData = pipeCleanerData[id] || { price: "", subMedia: [] };
        baseImgSrc = itemData.baseImg || `pipe cleaners/pipeCleaner${id}.jpg`;
        categoryName = "Pipe Cleaner";
        targetPhone = pipeCleanerPhone;
        currentCategory = 'pipe-cleaners';
    }

    if (itemData.title) {
        detailTitle.innerText = itemData.title;
        detailTitle.style.display = 'block';
    } else {
        detailTitle.style.display = 'none';
    }

    detailPriceTag.innerText = itemData.price;
    setMainMedia({ type: 'image', src: baseImgSrc });

    const allItems = [{ type: 'image', src: baseImgSrc }, ...itemData.subMedia];

    if (allItems.length <= 1) {
        gallerySection.style.display = 'none';
    } else {
        gallerySection.style.display = 'block';
        allItems.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = `gallery-card ${index === 0 ? 'active' : ''}`;

            if (item.type === 'video') {
                card.innerHTML = `<video src="${item.src}"></video>`;
            } else {
                card.innerHTML = `<img src="${item.src}" alt="Gallery photo">`;
            }

            card.onclick = () => {
                document.querySelectorAll('.gallery-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                setMainMedia(item);
            };

            detailGallery.appendChild(card);
        });
    }

    const itemLabel = itemData.title ? `"${itemData.title}"` : `Item #${id}`;
    const waMessage = `Hi Twisty Threads! I would like to inquire about ${categoryName} ${itemLabel} (${itemData.price}).`;
    detailWaBtn.href = `https://wa.me/${targetPhone}?text=${encodeURIComponent(waMessage)}`;
    detailInstaBtn.href = `https://instagram.com/${instagramHandle}`;

    showPage('product-detail');
}

function goBackToCategory() {
    showPage(currentCategory);
}