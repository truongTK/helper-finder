Service.upsert(
  {
    icon: "icons/img/baby-care.png",
    text: "Baby Care"
  },
  {
    $set: {
      icon: "icons/img/baby-care.png",
      text: "Baby Care"
    }
  });
Service.upsert({
  icon: "icons/img/cook-help.png",
  text: "Help Cooking"
}, {
  $set: {
    icon: "icons/img/cook-help.png",
    text: "Help Cooking"
  }
});
Service.upsert({
  icon: "icons/img/elderly-care.png",
  text: "Elder Care"
}, {
  $set: {
    icon: "icons/img/elderly-care.png",
    text: "Elder Care"
  }
});
Service.upsert({
  icon: "icons/img/home-massage.png",
  text: "Home Massage"
}, {
  $set: {
    icon: "icons/img/home-massage.png",
    text: "Home Massage"
  }
});
Service.upsert({
  icon: "icons/img/house-cleanning.png",
  text: "House Cleaning"
}, {
  $set: {
    icon: "icons/img/house-cleanning.png",
    text: "House Cleaning"
  }
});
Service.upsert({
  icon: "icons/img/medical.png",
  text: "Medical"
}, {
  $set: {
    icon: "icons/img/medical.png",
    text: "Medical"
  }
});
Service.upsert({
  icon: "icons/img/reparing.png",
  text: "Machine Repair"
}, {
  $set: {
    icon: "icons/img/reparing.png",
    text: "Machine Repair"
  }
});
Service.upsert({
  icon: "icons/img/shopping-help.png",
  text: "Help Shopping"
}, {
  $set: {
    icon: "icons/img/shopping-help.png",
    text: "Help Shopping"
  }
});
Service.upsert({
  icon: "icons/img/teaching.png",
  text: "Teaching"
}, {
  $set: {
    icon: "icons/img/teaching.png",
    text: "Teaching"
  }
});
Service.upsert({
  icon: "icons/img/text-translate.png",
  text: "Document Translate"
}, {
  $set: {
    icon: "icons/img/text-translate.png",
    text: "Document Translate"
  }
});
UserInfo.upsert({
  _id: 123,
  name: "Phạm Phúc Toàn",
  phone: "01228833055",
  email: "toanpp@twin.vn"
}, {
  $set: {
    name: "Phạm Phúc Toàn",
    phone: "01228833055",
    email: "toanpp@twin.vn"
  }
});


Jobs.upsert(
  {
    userInfoId: 123,
    serviceId: 1,
    status: "unpick",
    taskerId: null,
    fromDate: new Date(),
    toDate: new Date(),
    createDate: new Date()
  },
  {
    $set: {
      userInfoId: 123,
      serviceId: 1,
      status: "unpick",
      taskerId: null,
      fromDate: new Date(),
      toDate: new Date(),
      createDate: new Date()
    }
  }
);
Jobs.upsert(

  {
    userInfoId: 123,
    serviceId: 2,
    status: "unpick",
    taskerId: null,
    fromDate: new Date(),
    toDate: new Date(),
    createDate: new Date()
  },
  {
    $set: {
      userInfoId: 123,
      serviceId: 2,
      status: "unpick",
      taskerId: null,
      fromDate: new Date(),
      toDate: new Date(),
      createDate: new Date()
    }
  }
);
Jobs.upsert(
  {
    userInfoId: 123,
    serviceId: 3,
    status: "unpick",
    taskerId: null,
    fromDate: new Date(),
    toDate: new Date(),
    createDate: new Date()
  },
  {
    $set: {
      userInfoId: 123,
      serviceId: 3,
      status: "unpick",
      taskerId: null,
      fromDate: new Date(),
      toDate: new Date(),
      createDate: new Date()
    }
  }
);
