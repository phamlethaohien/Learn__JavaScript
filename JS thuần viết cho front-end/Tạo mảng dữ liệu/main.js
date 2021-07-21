// Mảng dữ liệu
var mangdl = [
    {   
        id: 1,
        anh: "https://kenh14cdn.com/thumb_w/800/pr/2021/photo-1-16265014020221650211418-32-0-781-1200-crop-1626501625296-63762124887521.jpg",
        noidung: "Món gà sốt Teriyaki ngon khó cưỡng",
    },

    {
        id: 2,
        anh: "https://channel.mediacdn.vn/2021/7/17/photo-1-16265014050302104759764.jpg",
        noidung: "Trứng ngâm tương tan chảy béo ngậy",
    },

    {
        id: 3,
        anh: "https://channel.mediacdn.vn/2021/7/17/photo-2-1626501405032872743844.jpg",
        noidung: "Cá hồi ngâm nước tương sang chảnh - đậm đà đưa cơm",
    },
];

for (let i = 0; i < mangdl.length; i++) {
    var noidungkhoi = `
    <div id="kcm-${mangdl[i].id}">
        <img src="${mangdl[i].anh}" alt="">
        <p>${mangdl[i].noidung}</p>
    </div>; `
    console.log(noidungkhoi);
}
