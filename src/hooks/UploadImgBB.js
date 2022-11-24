

// IMG BB WEBSITE UPLOAD THE IMG AND GET THE ORGINAL IMG URL
export const UploadImgBB  = async imgfile => {
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgBB_KEY}`;
    const fromData = new FormData();
    fromData.append("image", imgfile);
    const res = await fetch(url, {
        method: 'POST',
        body: fromData
    })
    const data = await res.json()
    return data
}