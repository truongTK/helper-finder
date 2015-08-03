Service.upsert({_id:1, key:"cl", text:"Cleaning"}, {$set:{
  key:"cl", text:"Cleaning"
}});
Service.upsert({_id:2, key:"mv", text:"Moving"}, {$set:{
  key:"mv", text:"Moving"
}});
Service.upsert({_id:3, key:"gn", text:"General"}, {$set:{
  key:"gn", text:"General"
}});

UserInfo.upsert({_id:123, name:"Phạm Phúc Toàn", phone:"01228833055", email:"toanpp@twin.vn"}, {$set:{
  name:"Phạm Phúc Toàn",
  phone:"01228833055",
  email:"toanpp@twin.vn"
}});


Jobs.upsert(
  {
    userInfoId: 123,
    serviceId:1,
    status:"unpick",
    taskerId:null,
    fromDate: new Date(),
    toDate:new Date(),
    createDate: new Date()
  },
  {
    $set: {
      userInfoId: 123,
      serviceId:1,
      status:"unpick",
      taskerId:null,
      fromDate: new Date(),
      toDate:new Date(),
      createDate: new Date()
    }
  }
);
Jobs.upsert(

  {
    userInfoId: 123,
    serviceId:2,
    status:"unpick",
    taskerId:null,
    fromDate: new Date(),
    toDate:new Date(),
    createDate: new Date()
  },
  {
    $set: {
      userInfoId: 123,
      serviceId:2,
      status:"unpick",
      taskerId:null,
      fromDate: new Date(),
      toDate:new Date(),
      createDate: new Date()
    }
  }
);
Jobs.upsert(
  {
    userInfoId: 123,
    serviceId:3,
    status:"unpick",
    taskerId:null,
    fromDate: new Date(),
    toDate:new Date(),
    createDate: new Date()
  },
  {
    $set: {
      userInfoId: 123,
      serviceId:3,
      status:"unpick",
      taskerId:null,
      fromDate: new Date(),
      toDate:new Date(),
      createDate: new Date()
    }
  }
);
