const data = {
    teachers : [
        {
            id:1,
            // name:"",
            age:"20",
            email:"nghiaduc3901@gmail.com.vn",
            phone:"(+84) 358804452",
            address:"Xóm 4, Nam Giang, Nam Đàn, Nghệ An"
        },
        {
            id:2,
            name:"Mrs Teacher 2",
            position:"Junior Web Developer",
            short: "You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)",
            dateOfBorned: "21st Novemver, 19xx",
            phone:"+84 (024) 3954 783",
            email:"teacher2@tlu.edu.vn",
            address:"175 Tây Sơn",
            avatar:"https://cdn.aarp.net/content/dam/aarp/about_aarp/nrta/2016/1140-nrta-overall-banner-teacher-portrait.imgcache.rev.web.600.345.jpg"
        }
    ]
}

window.localStorage.setItem('data_all', JSON.stringify(data));