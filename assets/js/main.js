// ==========================================
// 1. RENDER KARTU BIODATA ANGGOTA
// ==========================================
// Render Otomatis Biodata Anggota
function renderMembers() {
  const container = document.getElementById('members-container');
  if (!container) return;

  container.innerHTML = membersData.map((member) => `
    <div class="bg-slate-900 border border-slate-800 rounded-xl p-5 font-mono text-xs space-y-4">
      
      <!-- Foto & Nama -->
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shrink-0">
          <img src="${member.foto}" alt="${member.nama}" 
               onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(member.nama)}&background=1e293b&color=94a3b8';" 
               class="w-full h-full object-cover">
        </div>
        <div>
          <h3 class="text-white text-sm font-bold font-sans">${member.nama}</h3>
          <p class="text-slate-400">${member.asal_kota}</p>
        </div>
      </div>

      <!-- Kode Biodata Ringkas -->
      <div class="bg-slate-950 p-3 rounded-lg border border-slate-800/80 space-y-1 text-slate-300">
        <p><span class="text-sky-400">nama</span> = <span class="text-amber-300">"${member.nama}"</span></p>
        <p><span class="text-sky-400">tanggal_lahir</span> = <span class="text-amber-300">"${member.tanggal_lahir}"</span></p>
        <p><span class="text-sky-400">asal_kota</span> = <span class="text-amber-300">"${member.asal_kota}"</span></p>
      </div>

      <!-- Media Sosial (SVG Inline) & Akses CV ATS -->
      <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
        
        <!-- Link Sosmed dengan SVG Langsung -->
        <div class="flex items-center gap-3 text-slate-400">
          <a href="${member.instagram}" target="_blank" rel="noopener noreferrer" class="hover:text-pink-400 flex items-center gap-1.5 transition">
            <svg class="w-3.5 h-3.5 fill-current text-pink-400" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram</span>
          </a>

          <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-sky-400 flex items-center gap-1.5 transition">
            <svg class="w-3.5 h-3.5 fill-current text-sky-400" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
        
        <!-- Opsi CV ATS -->
        <div class="flex items-center gap-2 shrink-0">
          <button onclick="openCvModal('${member.cv}', '${member.nama}')" class="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 font-bold rounded text-[11px] flex items-center gap-1 transition whitespace-nowrap">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> Lihat CV
          </button>
          <a href="${member.cv}" download class="px-2.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded text-[11px] flex items-center gap-1 transition whitespace-nowrap">
            <i data-lucide="download" class="w-3.5 h-3.5"></i> Unduh
          </a>
        </div>
      </div>

    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// ==========================================
// 2. MODAL PREVIEW CV ATS
// ==========================================
function openCvModal(pdfUrl, nama) {
  const modal = document.getElementById('cv-modal');
  const iframe = document.getElementById('cv-iframe');
  const title = document.getElementById('cv-modal-title');

  if (modal && iframe) {
    iframe.src = pdfUrl;
    title.innerHTML = `<i data-lucide="file-text" class="w-4 h-4"></i> Pratinjau CV ATS - ${nama}`;
    modal.classList.remove('hidden');
    if (window.lucide) lucide.createIcons();
  }
}

function closeCvModal() {
  const modal = document.getElementById('cv-modal');
  const iframe = document.getElementById('cv-iframe');

  if (modal && iframe) {
    iframe.src = '';
    modal.classList.add('hidden');
  }
}

// ==========================================
// 3. RENDER & LIGHTBOX GALERI DOKUMENTASI
// ==========================================
function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  container.innerHTML = galleryData.map((item) => `
    <div onclick="openImageModal('${item.foto}', '${item.judul}', '${item.deskripsi}')" 
         class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden cursor-pointer group hover:border-amber-400/50 transition duration-300">
      
      <div class="h-44 overflow-hidden bg-slate-950 relative">
        <img src="${item.foto}" alt="${item.judul}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        
        <div class="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-amber-400 font-mono text-xs gap-1">
          <i data-lucide="maximize-2" class="w-4 h-4"></i> Klik untuk Membesar
        </div>
      </div>

      <div class="p-3 font-mono text-xs space-y-1">
        <p class="text-amber-400 font-semibold flex items-center gap-1">
          <span>&gt;</span> ${item.judul}
        </p>
        <p class="text-slate-400 font-sans text-[11px] line-clamp-2">${item.deskripsi}</p>
      </div>

    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function openImageModal(fotoUrl, judul, deskripsi) {
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('image-modal-src');
  const title = document.getElementById('image-modal-title');
  const desc = document.getElementById('image-modal-desc');

  if (modal && img) {
    img.src = fotoUrl;
    title.innerHTML = `<i data-lucide="image" class="w-4 h-4"></i> ${judul}`;
    desc.textContent = deskripsi;
    modal.classList.remove('hidden');
    if (window.lucide) lucide.createIcons();
  }
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('image-modal-src');

  if (modal && img) {
    img.src = '';
    modal.classList.add('hidden');
  }
}

// ==========================================
// 4. LOGIKA PERPINDAHAN TAB (VS CODE TABS)
// ==========================================
// LOGIKA PERPINDAHAN TAB (VS CODE TABS + DYNAMIC BREADCRUMB)
window.switchTab = function(tabName) {
  // 1. Sembunyikan semua konten tab
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));

  // 2. Reset tampilan semua header tab menjadi tidak aktif
  document.querySelectorAll('.tab-header').forEach(el => {
    el.classList.remove('border-t-sky-400', 'bg-slate-950', 'text-sky-400');
    el.classList.add('border-t-transparent', 'bg-slate-900/50', 'text-slate-400');
  });

  // 3. Tampilkan konten & nyalakan header tab yang diklik
  const targetContent = document.getElementById('content-' + tabName);
  const targetHeader = document.getElementById('tab-' + tabName);

  if (targetContent) targetContent.classList.remove('hidden');
  if (targetHeader) {
    targetHeader.classList.remove('border-t-transparent', 'bg-slate-900/50', 'text-slate-400');
    targetHeader.classList.add('border-t-sky-400', 'bg-slate-950', 'text-sky-400');
  }

  // 4. Update Teks & Ikon Breadcrumb secara Dinamis
  const breadcrumb = document.getElementById('breadcrumb-active');
  if (breadcrumb) {
    const breadcrumbMap = {
      'members': '<i data-lucide="users" class="w-3 h-3 text-amber-400"></i> members.json',
      'gallery': '<i data-lucide="image" class="w-3 h-3 text-sky-400"></i> gallery.md',
      'readme': '<i data-lucide="file-code" class="w-3 h-3 text-emerald-400"></i> README.md',
      'package': '<i data-lucide="file-json" class="w-3 h-3 text-purple-400"></i> package.json'
    };
    breadcrumb.innerHTML = breadcrumbMap[tabName] || tabName;
  }

  // 5. Render ulang ikon Lucide agar ikon breadcrumb langsung muncul
  if (window.lucide) lucide.createIcons();

  // 6. Tutup sidebar mobile jika sedang terbuka
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }
};

// ==========================================
// 5. INISIALISASI SAAT HALAMAN SELESAI DI-LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderMembers(); // Executed: Render Biodata Anggota
  renderGallery(); // Executed: Render Galeri Foto

  // Controls Sidebar Mobile
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toggleBtn = document.getElementById('toggle-sidebar');
  const closeBtn = document.getElementById('close-sidebar');

  if (toggleBtn) toggleBtn.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  });

  if (closeBtn) closeBtn.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  });

  if (overlay) overlay.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  });
});