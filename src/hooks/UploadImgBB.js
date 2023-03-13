

// IMG BB WEBSITE UPLOAD THE IMG AND GET THE ORGINAL IMG URL
export const UploadImgBB  = async imgfile => {
    console.log('uploadImgBb', imgfile)
    const imgHostKey = process.env.REACT_APP_IMGBB_API_KEY;
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    const fromData = new FormData();
    fromData.append("image", imgfile);
    const res = await fetch(url, {
        method: 'POST',
        body: fromData
    })
    const data = await res.json()
    // console.log("img photo data", data)
    return data
}