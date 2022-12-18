

export const useCustomScroll =  (e) => {
    const viewBtn = document.querySelector('.view-btn');
    window.addEventListener(("mousemove"),(e) => {
        viewBtn.style.left = String(e.clientX -10) + "px"

        viewBtn.style.top =  String(e.clientY - 10) + "px"

    })
}