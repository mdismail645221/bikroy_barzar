

// IMG BB WEBSITE UPLOAD THE IMG AND GET THE ORGINAL IMG URL
export const UploadImgBB  = async imgfile => {
    
    // const url = `https://api.imgbb.com/1/upload?key=ce047b9889c0df917aff170b7da91ab9`;
    // const url = `https://api.imgbb.com/1/upload?key=ce047b9889c0df917aff170b7da91ab9`;
    const url = `https://api.imgbb.com/1/upload?key=ce047b9889c0df917aff170b7da91ab9`
    const fromData = new FormData();
    fromData.append("image", imgfile);
    const res = await fetch(url, {
        method: 'POST',
        body: fromData
    })
    const data = await res.json()
    return data
}