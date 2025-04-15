let mark = JSON.parse(localStorage.getItem("mark")) || [];

const saveBtn = document.getElementById("save");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const bookmarkRow = document.querySelector(".row");

function saveMark() {
    localStorage.setItem("mark", JSON.stringify(mark));
}

function renderMarks() {
    bookmarkRow.innerHTML = "";

    mark.forEach((item, index) => {
        const col = document.createElement("div");
        col.className = "col-6 col-md-4 col-lg-3 mb-3";

        col.innerHTML = `
            <div class="p-2">
                <div class="card text-bg-dark mb-3 opacity-75" style="max-width: 18rem;">
                    <div class="card-header text-end">
                        <button type="button" class="btn-close" aria-label="Close" data-index="${index}"></button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><a href="${item.url}" target="_blank" class="text-light  link-underline-opacity-0">${item.name}</a></h5>
                    </div>
                </div>
            </div>
        `;

        // Gán sự kiện xoá
        col.querySelector(".btn-close").addEventListener("click", () => {
            mark.splice(index, 1);
            saveMark();
            renderMarks();
        });

        bookmarkRow.appendChild(col);
    });
}

saveBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const url = urlInput.value.trim();

    if (!name || !url) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (mark.some(m => m.url === url)) {
        alert("Liên kết này đã tồn tại!");
        return;
    }

    mark.push({ name, url });
    saveMark();
    renderMarks();

    // Xóa input và đóng modal
    nameInput.value = "";
    urlInput.value = "";
    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
});

// Khởi tạo khi tải trang
renderMarks();
