


export class GameData
{
    //-----------------------serializeData----------------------------
    // worldInfo: WorldInfo = new WorldInfo();
    //----------------------------------------------------------------

    //curWorldInfo: WorldInfo = null;
    // pkInfoManager: PKInfoManager = new PKInfoManager();
    // globalRankList:RankInfo[] = [];
    // myGlobalRank = null;
    // GlobalRankAllCount = 1;

    // // countryRankDataList = [];
    // // myCountryCount:number = -1;
    // //
    // // countryDetailList = {};
    // // myCountryRank:number = -1;
    // // myEventRank:number = -1;

    // friendList:string[] = [];//平台id
    // // platformFriendNameList:string[] = []; //平台昵称

    // inBlackList: boolean = false;

    // autoShareEndGame: boolean = true;
    // autoShareNewDragon: boolean = true;

    // //closeAudio: boolean = false;


    // beginUpdateOfflineTime: boolean = false;

    // watchVideoTime: number = 0;
    // dragonEggCD: number = 20;
    // perfectTime: number = 0;
    // goodTime: number = 0;

    // sumMonsterCount:number = 0;
    // killMonsterCount:number = 0;
    // bossStage: boolean = false;


    // flyingDragonStartTime: boolean = false;//开始计时
    // flyingDragonTime: number = 0;

    // liftCD: number = ConstValue.LIFT_INTERVAL_TIME;


    // firstSubscribe: boolean = true;
    // first: boolean = false;

    // canPurchase: boolean = false;
    // surpass: any;

    // moreCoinsAdsMaxCount = 10;  // 任务广告上限
    // levelOffset = 5;   // 能买的龙等级倒数5级
    // optimal = 0;    // 性价比最优龙 1是 0否

    // treasure_box_enable: boolean = true;

    // timeWarpVideoTime: number = 0;

    // firebaseDbData: any = null;

    // debug: boolean = false;

    // goldTimeoutId: number = null;
    // maxEggCount:number = 3;

    // activityEndsTime:number = 0;
    // activityRewards = [];

    // exploreRedPointNotify: boolean = false; //探索红点是否已通知

    // public eggTime = 0;

    // public isAutoPlay = false;

    // constructor()
    // {
    //     ListenerManager.getInstance().add(ListenerType.LoopUpdate, this, this.onUpdate);
    // }

    // onUpdate(dt)
    // {
    //     this.updateAngryTime(dt);

    //     this.updateOfflineTime(dt);

    //     this.updateFlyingDragonTime(dt);

    //     this.updateEgg(dt);

    //     this.updateExploreRedPoint(dt);

    //     this.updateEventRedPoint(dt);
    // }

    // initPlayerInfo(playerInfo: PlayerDataInfo) {
    //     if(playerInfo && Object.getOwnPropertyNames(playerInfo).length > 0 )
    //     {
    //         this.worldInfo.playerInfo = playerInfo;
    //         this.worldInfo.playerInfo["__proto__"] = PlayerDataInfo.prototype;
    //     }
    //     else
    //     {
    //         this.updatePlayerInfo();
    //     }
    // }

    // updatePlayerInfo() {
    //     StorageUtil.setLocalItemDefer(this.worldInfo.playerInfo._storageKey, this.worldInfo.playerInfo);
    // }

    // initWorldOtherInfo(worldOtherInfo: WorldOtherInfo)
    // {
    //     if(worldOtherInfo && Object.getOwnPropertyNames(worldOtherInfo).length > 0 )
    //     {
    //         this.worldInfo.worldOtherInfo = worldOtherInfo;
    //         this.worldInfo.worldOtherInfo["__proto__"] = WorldOtherInfo.prototype;
    //     }
    //     else
    //     {
    //         this.updateWorldOtherInfo();
    //     }
    // }

    // updateWorldOtherInfo()
    // {
    //     StorageUtil.setLocalItemDefer(this.worldInfo.worldOtherInfo._storageKey, this.worldInfo.worldOtherInfo);
    // }

    // initWarPlatformInfo(warPlatformInfo: WarPlatformInfo)
    // {
    //     let worldInfo = this.worldInfo;
    //     if (warPlatformInfo && Object.getOwnPropertyNames(warPlatformInfo).length > 0) {
    //         worldInfo.warPlatformInfo = warPlatformInfo;
    //         worldInfo.warPlatformInfo["__proto__"] = WarPlatformInfo.prototype;
    //         if (worldInfo.warPlatformInfo.unitInfoList.length == 0) {
    //             this.resetPlatformInfo();
    //         }
    //         else {
    //             for (let i = 0; i < worldInfo.warPlatformInfo.unitInfoList.length; ++i) {
    //                 worldInfo.warPlatformInfo.unitInfoList[i]["__proto__"] = PlatformUnitInfo.prototype;
    //                 if (worldInfo.warPlatformInfo.unitInfoList[i].dragonInfo) {
    //                     worldInfo.warPlatformInfo.unitInfoList[i].dragonInfo["__proto__"] = DragonInfo.prototype;
    //                 }
    //             }
    //             for (let i = 0; i < worldInfo.warPlatformInfo.superInfoList.length; ++i) {
    //                 worldInfo.warPlatformInfo.superInfoList[i]["__proto__"] = PlatformUnitInfo.prototype;
    //                 if (worldInfo.warPlatformInfo.superInfoList[i].dragonInfo) {
    //                     worldInfo.warPlatformInfo.superInfoList[i].dragonInfo["__proto__"] = DragonInfo.prototype;
    //                 }
    //             }
    //         }
    //     }
    //     else {
    //         this.resetPlatformInfo();
    //     }
    // }

    // resetPlatformInfo() {
    //     let worldInfo = this.worldInfo;
    //     // let unlockConfigContainer = ConfigManager.getInstance().getConfig(UnlockConfigContainer) as UnlockConfigContainer;
    //     // let unlockConfigData = unlockConfigContainer.getUnlockConfigData();
    //     for (let i = 0; i < ConstValue.NORMAL_GROUND; ++i) {
    //         let unit = new PlatformUnitInfo();
    //         unit._index = i;
    //         unit._locked = false;
    //         unit._dragonInfo = null;
    //         worldInfo.warPlatformInfo.unitInfoList.push(unit);
    //     }
    //     for (let i = 0; i < ConstValue.SUPER_GROUND; ++i) {
    //         let unit = new PlatformUnitInfo();
    //         unit._index = i;
    //         unit._locked = false;
    //         unit._dragonInfo = null;
    //         worldInfo.warPlatformInfo.superInfoList.push(unit);
    //     }
    //     this.updateWarPlatformInfo();
    // }

    // updateWarPlatformInfo()
    // {
    //     StorageUtil.setLocalItemDefer(this.worldInfo.warPlatformInfo._storageKey, this.worldInfo.warPlatformInfo);
    // }

    // initDragonKnightInfo(dragonKnightInfo: DragonKnightInfo) {
    //     if(dragonKnightInfo && Object.getOwnPropertyNames(dragonKnightInfo).length > 0 )
    //     {
    //         this.worldInfo.dragonKnightInfo = dragonKnightInfo;
    //         this.worldInfo.dragonKnightInfo["__proto__"] = DragonKnightInfo.prototype;
    //     }
    //     else
    //     {
    //         this.updateDragonKnightInfo();
    //     }
    // }

    // updateDragonKnightInfo()
    // {
    //     StorageUtil.setLocalItemDefer(this.worldInfo.dragonKnightInfo._storageKey, this.worldInfo.dragonKnightInfo);
    // }

    // initNormalDragonListInfo(normalDragonListInfo: NormalDragonListInfo)
    // {
    //     let worldInfo = this.worldInfo;
    //     if(normalDragonListInfo && Object.getOwnPropertyNames(normalDragonListInfo).length > 0 )
    //     {
    //         worldInfo.normalDragonListInfo = normalDragonListInfo;
    //         worldInfo.normalDragonListInfo["__proto__"] = NormalDragonListInfo.prototype;
    //         if(worldInfo.normalDragonListInfo.unitInfoList.length == 0)
    //         {
    //             let normalDragonConfigContainer = ConfigManager.getInstance().getConfig(NormalDragonConfigContainer) as NormalDragonConfigContainer;
    //             let normalDragonConfigData = normalDragonConfigContainer.getNormalDragonConfigData();
    //             for(let i = 0; i < normalDragonConfigData.length; ++i)
    //             {
    //                 let unit = new NormalDragonUnitInfo();
    //                 if(i == 0)
    //                     unit.locked = false;
    //                 unit._index = normalDragonConfigData[i].id;
    //                 worldInfo.normalDragonListInfo.unitInfoList.push(unit);
    //             }
    //             this.updateNormalDragonListInfo();
    //         }
    //         else
    //         {
    //             for(let i = 0; i < worldInfo.normalDragonListInfo.unitInfoList.length; ++i)
    //             {
    //                 worldInfo.normalDragonListInfo.unitInfoList[i]["__proto__"] = NormalDragonUnitInfo.prototype;
    //             }
    //         }
    //     }
    //     else
    //     {
    //         let normalDragonConfigContainer = ConfigManager.getInstance().getConfig(NormalDragonConfigContainer) as NormalDragonConfigContainer;
    //         let normalDragonConfigData = normalDragonConfigContainer.getNormalDragonConfigData();
    //         for(let i = 0; i < normalDragonConfigData.length; ++i)
    //         {
    //             let unit = new NormalDragonUnitInfo();
    //             if(i == 0)
    //                 unit.locked = false;
    //             unit._index = normalDragonConfigData[i].id;
    //             worldInfo.normalDragonListInfo.unitInfoList.push(unit);
    //         }
    //         this.updateNormalDragonListInfo();
    //     }
    // }

    // updateNormalDragonListInfo()
    // {
    //     StorageUtil.setLocalItemDefer(this.worldInfo.normalDragonListInfo._storageKey, this.worldInfo.normalDragonListInfo);
    // }

    // initEliteDragonListInfo(eliteDragonListInfo: EliteDragonListInfo)
    // {
    //     let worldInfo = this.worldInfo;
    //     if (eliteDragonListInfo && Object.getOwnPropertyNames(eliteDragonListInfo).length > 0)
    //     {
    //         worldInfo.eliteDragonListInfo = eliteDragonListInfo;
    //         worldInfo.eliteDragonListInfo["__proto__"] = EliteDragonListInfo.prototype;
    //         if (worldInfo.eliteDragonListInfo.unitInfoList.length == 0)
    //         {
    //             let eliteDragonConfigContainer = ConfigManager.getInstance().getConfig(EliteDragonConfigContainer) as EliteDragonConfigContainer;
    //             let eliteDragonConfigData = eliteDragonConfigContainer.getEliteDragonConfigData();
    //             for (let i = 0; i < eliteDragonConfigData.length; ++i)
    //             {
    //                 let unit = new EliteDragonUnitInfo();
    //                 unit._index = eliteDragonConfigData[i].id;
    //                 worldInfo.eliteDragonListInfo.unitInfoList.push(unit);
    //             }
    //             this.updateEliteDragonListInfo();
    //         }
    //         else
    //         {
    //             for (let i = 0; i < worldInfo.eliteDragonListInfo.unitInfoList.length; ++i)
    //             {
    //                 worldInfo.eliteDragonListInfo.unitInfoList[i]["__proto__"] = EliteDragonUnitInfo.prototype;
    //             }

    //             //判断是否龙的个数一样
    //             let eliteDragonConfigContainer = ConfigManager.getInstance().getConfig(EliteDragonConfigContainer) as EliteDragonConfigContainer;
    //             let eliteDragonConfigData = eliteDragonConfigContainer.getEliteDragonConfigData();
    //             if(worldInfo.eliteDragonListInfo.unitInfoList.length != eliteDragonConfigData.length)
    //             {
    //                 for (let i = 0; i < eliteDragonConfigData.length; ++i)
    //                 {
    //                     if(!worldInfo.eliteDragonListInfo.haveEliteDragonUnitInfo(eliteDragonConfigData[i].id))
    //                     {
    //                         let unit = new EliteDragonUnitInfo();
    //                         unit._index = eliteDragonConfigData[i].id;
    //                         worldInfo.eliteDragonListInfo.unitInfoList.push(unit);
    //                     }
    //                 }
    //                 this.updateEliteDragonListInfo();
    //             }
    //         }
    //     }
    //     else
    //     {
    //         let eliteDragonConfigContainer = ConfigManager.getInstance().getConfig(EliteDragonConfigContainer) as EliteDragonConfigContainer;
    //         let eliteDragonConfigData = eliteDragonConfigContainer.getEliteDragonConfigData();
    //         for (let i = 0; i < eliteDragonConfigData.length; ++i)
    //         {
    //             let unit = new EliteDragonUnitInfo();
    //             unit._index = eliteDragonConfigData[i].id;
    //             worldInfo.eliteDragonListInfo.unitInfoList.push(unit);
    //         }
    //         this.updateEliteDragonListInfo();
    //     }
    // }

    // updateEliteDragonListInfo()
    // {
    //     StorageUtil.setLocalItemDefer(this.worldInfo.eliteDragonListInfo._storageKey, this.worldInfo.eliteDragonListInfo);
    // }


    // updatePKWeekLeftTime(dt: number)
    // {
    //     if(this.pkInfoManager.pkWeekData.linked)
    //     {
    //         if(this.pkInfoManager.pkWeekData.leftTime > 0)
    //         {
    //             this.pkInfoManager.pkWeekData.leftTime -= dt;
    //         }
    //         else
    //         {
    //             // 周期结束，重新获取数据
    //             this.pkInfoManager.pkWeekData.linked = false;
    //             this.androidSetPKWeekInfo();
    //         }
    //     }
    // }


    // updatePKRankData(callback?: Function)
    // {
    //     this.pkInfoManager.globalPKRankDataList = [];
        
    //     //得到全球排行榜
    //     //得到pk队列
    //     //得到个人的pk信息
    //     server_util_android.getWeekGlobalRank((data)=>{
    //         cc.log("rankPkGlobalDatas" , data);
    //         for(let i = 0; i < data.list.length; ++i)
    //         {
    //             let pkRankInfo = new PKRankInfo();
    //             pkRankInfo = this.objectSwitchPKEntryToPKRankInfo(data.list[i])

    //             this.pkInfoManager.globalPKRankDataList.push(pkRankInfo);
    //         }

    //         // this.pkData.pkRankinfoList = [];
    //         // for (let index = 0; index <  data.surpass.length; index++) {

    //         //     this.pkData.pkRankinfoList.push(this.objectSwitchPKEntryToPKRankInfo({
    //         //         rank: data.surpass[index].pos + 1,
    //         //         score: data.surpass[index].score,
    //         //         name: data.surpass[index].nickname,
    //         //         photo: data.surpass[index].avatar,
    //         //         id: data.surpass[index].user_id,
    //         //         extra_data: data.surpass[index].extra_data,
    //         //     }));
            

    //         //     if(data.surpass[index].user_id == server_util_android.userId){

    //         //         let mypkRankInfo = new PKRankInfo();
    //         //         mypkRankInfo = this.objectSwitchPKEntryToPKRankInfo({
    //         //             rank: data.surpass[index].pos + 1,
    //         //             score: data.surpass[index].score,
    //         //             name: data.surpass[index].nickname,
    //         //             photo: data.surpass[index].avatar,
    //         //             id: data.surpass[index].user_id,
    //         //             extra_data: data.surpass[index].extra_data,
    //         //         })

    //         //         this.myPKRankData = mypkRankInfo;
    //         //         cc.log("mypkdata",this.myPKRankData);
    //         //     }
    //         // }

    //         callback && callback();
    //     });

    //     server_util_android.getWeekFriendsRank(this.friendList, (data) => {

    //         cc.log("PKFriendsRank",data);
    //         this.pkInfoManager.friendsPKRankDataList = [];
    //         for(let i = 0; i < data.length; ++i)
    //         {
    //             let pkRankInfo = new PKRankInfo();             
    //             pkRankInfo =this.objectSwitchPKEntryToPKRankInfo(data[i])

    //             this.pkInfoManager.friendsPKRankDataList.push(pkRankInfo);
    //         }

    //         cc.log("friendsPKRankDataList",this.pkInfoManager.friendsPKRankDataList);

    //         ListenerManager.getInstance().trigger(ListenerType.FriendsPkRankSuccess);
    //     });
    // }
    
    // switchPKEntryToPKRankInfo(entry): PKRankInfo
    // {
    //     let pkRankInfo = new PKRankInfo();

    //     pkRankInfo.rank = entry.getRank();
    //     pkRankInfo.score = entry.getScore();
    //     let player = entry.getPlayer();
    //     pkRankInfo.name = player.getName();
    //     pkRankInfo.photo = player.getPhoto();
    //     pkRankInfo.id = player.getID();

    //     let strExtraData = entry.getExtraData();
    //     //LogWrap.info("strExtraData = " + strExtraData);
    //     if(strExtraData)
    //     {
    //         let extraData = null;
    //         try
    //         {
    //             extraData = JSON.parse(strExtraData);
    //         }
    //         catch(err)
    //         {
    //             extraData = null;
    //         }
    //         //LogWrap.info("extraData = " + extraData);
    //         pkRankInfo.dragonIds[0] = extraData && extraData["dragonId0"] !== undefined ? extraData["dragonId0"] : -1;
    //         pkRankInfo.dragonIds[1] = extraData && extraData["dragonId1"] !== undefined ? extraData["dragonId1"] : -1;
    //         pkRankInfo.dragonIds[2] = extraData && extraData["dragonId2"] !== undefined ? extraData["dragonId2"] : -1;
    //     }
    //     else
    //     {
    //         pkRankInfo.dragonIds[0] = -1;
    //         pkRankInfo.dragonIds[1] = -1;
    //         pkRankInfo.dragonIds[2] = -1;
    //     }

    //     return pkRankInfo;
    // }
    
    // objectSwitchPKEntryToPKRankInfo(object): PKRankInfo
    // {
    //     let pkRankInfo = new PKRankInfo();

    //     pkRankInfo.rank = object.rank;
    //     pkRankInfo.score = object.score;
    //     pkRankInfo.name = object.name;
    //     pkRankInfo.photo = object.photo;
    //     pkRankInfo.id = object.id;
    //     // pkRankInfo.platform_uid = object.platform_uid

    //     let strExtraData = object.extra_data;
    //     if(strExtraData && strExtraData.length > 0)
    //     {
    //         let extraData = JSON.parse(strExtraData);
    //         pkRankInfo.dragonIds[0] = extraData && extraData["dragonId0"] !== undefined ? extraData["dragonId0"] : -1;
    //         pkRankInfo.dragonIds[1] = extraData && extraData["dragonId1"] !== undefined ? extraData["dragonId1"] : -1;
    //         pkRankInfo.dragonIds[2] = extraData && extraData["dragonId2"] !== undefined ? extraData["dragonId2"] : -1;
    //     }
    //     else
    //     {
    //         pkRankInfo.dragonIds[0] = -1;
    //         pkRankInfo.dragonIds[1] = -1;
    //         pkRankInfo.dragonIds[2] = -1;
    //     }


    //     return pkRankInfo;
    // }
    
    // androidInitRankData()
    // {
    //     let extraData = null;
    //     server_util_android.setRankInfo(this.worldInfo.playerInfo.exp,this.worldInfo.playerInfo.level
    //         , this.worldInfo.playerInfo.stage
    //         , this.worldInfo.playerInfo.gold
    //         , this.worldInfo.playerInfo.gold, extraData, function () { });


    //     // server_util_android.getCountry("gold",(rankDataList: RankInfo[])=>{
    //     //     GameDataManager.getInstance().getGameData().countryRankDataList = rankDataList;
    //     //     cc.log("country rank" , rankDataList);
    //     // },()=>{});


    //     server_util_android.getFriendsRank(GameDataManager.getInstance().getGameData().friendList, (rankDataList: RankInfo[]) => {
    //         GameDataManager.getInstance().getGameData().pkInfoManager.friendsRankDataList = rankDataList;
    //         cc.log("friend rank", rankDataList);
    //         ListenerManager.getInstance().trigger(ListenerType.FriendsRankSuccess);
    //     })

    //     GameDataManager.getInstance().getGameData().updatePKRankData();

    // }

    // androidSetPKWeekInfo()
    // {
    //     server_util_android.getWeekInfo((data)=>{
    //         this.pkInfoManager.pkWeekData.linked = true;
    //         this.pkInfoManager.pkWeekData.leftTime = data.end_time - data.now_time;
    //         this.pkInfoManager.pkWeekData.curTime = data.now_time;
    //         this.pkInfoManager.pkWeekData.curWeek = data.week;
    //         if(Object.keys(data.prev_data).length == 0)
    //         {
    //             this.pkInfoManager.pkWeekData.haveReward = false;
    //         }
    //         else
    //         {
    //             this.pkInfoManager.pkWeekData.haveReward = true;
    //             this.pkInfoManager.pkWeekData.rankIndex = data.prev_data.mypos;
    //             this.pkInfoManager.pkWeekData.score = data.prev_data.data.score;
    //             this.pkInfoManager.pkWeekData.rewardWeek = data.prev_data.end_time;
    //         }
    //     });
    // }


    // getDataKeys() {
    //     var keys = {};
    //     keys[this.worldInfo.playerInfo._storageKey] = this.worldInfo.playerInfo;
    //     keys[this.worldInfo.worldOtherInfo._storageKey] = this.worldInfo.worldOtherInfo;
    //     keys[this.worldInfo.warPlatformInfo._storageKey] = this.worldInfo.warPlatformInfo;
    //     keys[this.worldInfo.eliteDragonListInfo._storageKey] = this.worldInfo.eliteDragonListInfo;
    //     keys[this.worldInfo.normalDragonListInfo._storageKey] = this.worldInfo.normalDragonListInfo;
    //     keys[this.worldInfo.taskInfo._storageKey] = this.worldInfo.taskInfo;
    //     keys[this.worldInfo.mailInfo._storageKey] = this.worldInfo.mailInfo;
    //     keys[this.worldInfo.eventInfo._storageKey] = this.worldInfo.eventInfo;
    //     keys[this.worldInfo.dragonKnightInfo._storageKey] = this.worldInfo.dragonKnightInfo;
    //     return keys;
    // }

    // unserializeData(forceData)
    // {
    //     // this.initWorldGuideInfo(null);
    //     // return;

    //     StorageUtil.register();
    //     StorageUtil.getAllLocalData(
    //         this.getDataKeys(),
    //         (first)=>{
    //         this.first = first;

    //         //新玩家
    //         if(first){
    //             Ymn.getInstance().logEvent('first_login');
    //             this.worldInfo.worldOtherInfo.keepLoginDays = 0;
    //             this.worldInfo.worldOtherInfo.guideStatus = EGuideStatus.plotWelcom;
    //         }
            
    //         if(first)
    //         {
    //             this.initPlayerInfo(null);
    //             this.initWorldOtherInfo(null);
    //             this.initWarPlatformInfo(null);
    //             this.initEliteDragonListInfo(null);
    //             this.initNormalDragonListInfo(null);
    //             this.initDragonKnightInfo(null);
    //             TaskManager.getInstance().initTaskInfo(null);
    //             MailManager.getInstance().initMailInfo(null);
    //             EventManager.getInstance().initEventInfo(null);
    //         }
    //         else
    //         {
    //             this.initPlayerInfo(StorageUtil.getGameDataItem(this.worldInfo.playerInfo._storageKey));
    //             this.initWorldOtherInfo(StorageUtil.getGameDataItem(this.worldInfo.worldOtherInfo._storageKey));
    //             this.initWarPlatformInfo(StorageUtil.getGameDataItem(this.worldInfo.warPlatformInfo._storageKey));
    //             this.initEliteDragonListInfo(StorageUtil.getGameDataItem(this.worldInfo.eliteDragonListInfo._storageKey));
    //             this.initNormalDragonListInfo(StorageUtil.getGameDataItem(this.worldInfo.normalDragonListInfo._storageKey));
    //             this.initDragonKnightInfo(StorageUtil.getGameDataItem(this.worldInfo.dragonKnightInfo._storageKey));
    //             TaskManager.getInstance().initTaskInfo(StorageUtil.getGameDataItem(this.worldInfo.taskInfo._storageKey));
    //             MailManager.getInstance().initMailInfo(StorageUtil.getGameDataItem(this.worldInfo.mailInfo._storageKey));
    //             EventManager.getInstance().initEventInfo(StorageUtil.getGameDataItem(this.worldInfo.eventInfo._storageKey));
    //         }

    //         //this.initDragonGiftEarning();

    //         let per = this.worldInfo.worldOtherInfo.lastLoginTime
    //         let now = TimeUtil.getCurrentTime();

    //         if(numberUtil.isOneDay(per,now)){
    //             cc.log("zmj__  同一天");
    //         }else{
    //             this.worldInfo.worldOtherInfo.keepLoginDays += 1;
    //             this.worldInfo.worldOtherInfo.lastLoginTime = now;
    //             Ymn.getInstance().logEvent("keep_login_days" , {type: this.worldInfo.worldOtherInfo.keepLoginDays});
    //         }

    //         ListenerManager.getInstance().trigger(ListenerType.GameStart);
    //     });
    // }

    // rankTimeoutId = null;
    // initRankData()
    // {
    //     clearInterval(this.rankTimeoutId);
    //     this.setRankData();
    //     // this.androidInitRankData();
    //     // this.androidSetPKWeekInfo();
    //     this.rankTimeoutId = setInterval(() =>{
    //         this.setRankData();
    //     }, 5 * 60 * 1000);
    // }

    // setRankData(){
    //     let playerInfo = this.worldInfo.playerInfo;
    //     server_util_android.setRankInfo(playerInfo.bestStage, playerInfo.level, '0', playerInfo.gold, '0', '',function () {
    //         cc.log('set Rank info success');
    //     });

    //     server_util_android.getGlobalRank((players, mypos, allCount) => {
    //         this.globalRankList = players;
    //         this.GlobalRankAllCount = allCount;
    //         this.myGlobalRank = {
    //             id: playerInfo.userId,
    //             photo: playerInfo.photo,
    //             name: playerInfo.userName,
    //             score: playerInfo.bestStage,
    //             level: playerInfo.level,
    //             coins: playerInfo.gold,
    //             index: mypos,
    //         };

    //         if (this.worldInfo.playerInfo.firstLoginRank)
    //         {
    //             this.worldInfo.playerInfo.lastLoginRankTime = TimeUtil.getCurrentTime();
    //             this.worldInfo.playerInfo.firstLoginRank = false;
    //         }
    //         else
    //         {
    //             if (TimeUtil.isOneDay(this.worldInfo.playerInfo.lastLoginRankTime, TimeUtil.getCurrentTime()))
    //             {
    //                 // this.worldInfo.playerInfo.lastLoginRankTime = 0;
    //             }
    //             else
    //             {
    //                 this.worldInfo.playerInfo.lastLoginRankTime = TimeUtil.getCurrentTime();
    //                 // rank 奖励
    //                 let reward = this.rankReward(mypos, allCount);
    //                 if(numberUtil.cmpBigInt(reward, 0) > 0) {
    //                     MailManager.getInstance().addMail(EMailType.rank, [{ id: 201, value: reward }]);
    //                 }
    //             }
    //         }

    //         ListenerManager.getInstance().trigger(ListenerType.GlobalRankSuccess);
    //     });
    // }

    // rankReward(mypos, allCount):string
    // {
    //     let container = ConfigManager.getInstance().getConfig(RankRewardConfigContainer) as RankRewardConfigContainer;
    //     let configData = container.getRankRewardConfigData();
    //     let reward:string = "0";
    //     cc.log('reward rank data = ', configData)
    //     for (let index = 0; index < configData.length; index++)
    //     {
    //         const element = configData[index];

    //         if (element.type == "0")
    //         {
    //             if (element.rankMin <= mypos && element.rankMax >= mypos)
    //             {
    //                 reward = numberUtil.galaxyAdd(reward, element.reward);
    //             }
    //         }
    //         else
    //         {
    //             if (element.rankMin <= mypos / allCount && element.rankMax >= mypos / allCount)
    //             {
    //                 reward = numberUtil.galaxyAdd(reward, element.reward);
    //             }
    //         }
    //     }

    //     return reward;
    // }

    // canMerge(originGridIndex: number, targetGridIndex: number):boolean
    // {
    //     let targetUnitInfo = this.worldInfo.warPlatformInfo.unitInfoList[targetGridIndex];
    //     let originUnitInfo = this.worldInfo.warPlatformInfo.unitInfoList[originGridIndex];
    //     if(originGridIndex == targetGridIndex)
    //     {
    //     }
    //     else if(targetUnitInfo.locked)
    //     {
    //     }
    //     else
    //     {
    //         if(targetUnitInfo.dragonInfo && originUnitInfo.dragonInfo.dragonId == targetUnitInfo.dragonInfo.dragonId)
    //         {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // mergeDragon(originGridIndex: number, targetGridIndex: number)
    // {
    //     let targetUnitInfo = this.worldInfo.warPlatformInfo.unitInfoList[targetGridIndex];
    //     let originUnitInfo = this.worldInfo.warPlatformInfo.unitInfoList[originGridIndex];

    //     if(originGridIndex == targetGridIndex)
    //     {
    //         // 自身格子
    //         cc.log("自身格子");
    //         ListenerManager.getInstance().trigger(ListenerType.OnMergeDragon, originGridIndex, originGridIndex);
    //     }
    //     else if(targetUnitInfo.locked)
    //     {
    //         // 未解锁
    //         cc.log("未解锁");
    //         ListenerManager.getInstance().trigger(ListenerType.OnMergeDragon, originGridIndex, originGridIndex);
    //     }
    //     else
    //     {
    //         if(targetUnitInfo.dragonInfo)
    //         {
    //             cc.log("有龙");
                
    //             if(MergeDragonManager.getInstance().canMeregeNormalDragon(originUnitInfo.dragonInfo.dragonId,targetUnitInfo.dragonInfo.dragonId))
    //             {
    //                 cc.log("合成龙");
    //                 let container = ConfigManager.getInstance().getConfig(DragonConfigContainer) as DragonConfigContainer;
    //                 let dragonConfigDataList = container.getDragonConfigData();
    //                 let newDragonId = targetUnitInfo.dragonInfo.dragonId + 1;
    //                 if(newDragonId === 9 || newDragonId === 10)
    //                 {
    //                     this.addMergeCount(Math.min(targetUnitInfo.dragonInfo.dragonId,targetUnitInfo.dragonInfo.dragonId));
    //                     let dragonId = MergeDragonManager.getInstance().MergeNormalDragon(originUnitInfo.dragonInfo.dragonId,targetUnitInfo.dragonInfo.dragonId);
    //                     let isUnlock = this.worldInfo.eliteDragonListInfo.isEliteDragonUnlock(dragonId);
    //                     setTimeout(() => {
    //                         ListenerManager.getInstance().trigger(ListenerType.OnShowNewDragon, dragonId, isUnlock);
    //                     }, 0);
                        
    //                     setTimeout(() => {
    //                         this.worldInfo.eliteDragonListInfo.giveEliteDragon(dragonId);
    //                     }, 1500);
    //                     originUnitInfo.dragonInfo = null;
    //                     targetUnitInfo.dragonInfo = null;
    //                     ListenerManager.getInstance().trigger(ListenerType.OnDeleteDragon, true, originGridIndex);
    //                     ListenerManager.getInstance().trigger(ListenerType.OnDeleteDragon, true, targetGridIndex);
    //                     ListenerManager.getInstance().trigger(ListenerType.GiveSectionPackage,TriggerType.NEW_DRAGON);
    //                     //任务系统-龙合成
    //                     TaskManager.getInstance().triggerTask(ETaskTriggerType.mergeDragon);
    //                     //任务系统-合成超级龙
    //                     TaskManager.getInstance().triggerTask(ETaskTriggerType.mergeEliteDragon);
    //                     //任务系统-升级超级龙
    //                     TaskManager.getInstance().triggerTask(ETaskTriggerType.upgradeEliteDragonLevel, 1);
    //                     //新手任务-龙合成
    //                     GuideManager.getInstance().mergeDragon(dragonId);
    //                     //发送临时池的龙
    //                     this.worldInfo.normalDragonListInfo.sendNormalDragon();
    //                     Ymn.getInstance().logEvent("elite_dragon_unlock");
    //                 }
    //                 else
    //                 {
    //                     if(!dragonConfigDataList[newDragonId])
    //                     {
    //                         UIHelp.showTip("Already max level dragon");
    //                         ListenerManager.getInstance().trigger(ListenerType.OnMergeDragon, originGridIndex, originGridIndex);
    //                     }
    //                     else
    //                     {

    //                         this.addMergeCount(targetUnitInfo.dragonInfo.dragonId);

    //                         let dragonId = MergeDragonManager.getInstance().MergeNormalDragon(originUnitInfo.dragonInfo.dragonId,targetUnitInfo.dragonInfo.dragonId);
    //                         targetUnitInfo.dragonInfo.dragonId = dragonId;
    //                         originUnitInfo.dragonInfo = null;
    //                         if(this.worldInfo.normalDragonListInfo.getNormalDragonUnitInfo(targetUnitInfo.dragonInfo.dragonId).locked)
    //                         {
    //                             // this.worldInfo.worldOtherInfo.maxCurDragonId = targetUnitInfo.dragonInfo.dragonId;
    //                             setTimeout(() =>{
    //                                 ListenerManager.getInstance().trigger(ListenerType.OnShowNewDragon, dragonId, false);
    //                             }, 500);
    //                             ListenerManager.getInstance().trigger(ListenerType.UpdateCatchDragon);
    //                             //普通龙图鉴解锁
    //                             this.worldInfo.normalDragonListInfo.unLockNormalDragon(targetUnitInfo.dragonInfo.dragonId);
    //                         }
    //                         else
    //                         {
    //                             //任务系统-龙合成
    //                             TaskManager.getInstance().triggerTask(ETaskTriggerType.mergeDragon, 1, {tier:dragonId});
    //                             //新手任务-龙合成
    //                             GuideManager.getInstance().mergeDragon(targetUnitInfo.dragonInfo.dragonId);
    //                         }
    
    //                         //ListenerManager.getInstance().trigger(ListenerType.LevelProgress, GameDataManager.getInstance().getGameData().curSublandInfo);
    //                         ListenerManager.getInstance().trigger(ListenerType.OnMergeDragon, originGridIndex, targetGridIndex, targetUnitInfo.dragonInfo.dragonId);
    //                         //刷新每秒收益
    //                         ListenerManager.getInstance().trigger(ListenerType.OnOnlineEarnings, true, targetGridIndex,0.5);
    //                         //任务系统-升级龙等级
    //                         TaskManager.getInstance().triggerTask(ETaskTriggerType.upgradeDragonLevel, 1,{tier:dragonId});
    //                         //发送临时池的龙
    //                         this.worldInfo.normalDragonListInfo.sendNormalDragon();
    //                     }
    //                 }
    //             }
    //             else
    //             {
    //                 cc.log("交换位置");
    //                 let temp = targetUnitInfo.dragonInfo;
    //                 targetUnitInfo.dragonInfo = originUnitInfo.dragonInfo;
    //                 originUnitInfo.dragonInfo = temp;

    //                 ListenerManager.getInstance().trigger(ListenerType.OnMergeDragon, originGridIndex, targetGridIndex);
    //             }
    //         }
    //         else
    //         {
    //             cc.log("空格子");
    //             targetUnitInfo.dragonInfo = originUnitInfo.dragonInfo;
    //             originUnitInfo.dragonInfo = null;

    //             ListenerManager.getInstance().trigger(ListenerType.OnMergeDragon, originGridIndex, targetGridIndex);
    //         }
    //     }
    // }

    // addMergeCount(dragonId: number)
    // {
    //     let normalDragonInfo = this.worldInfo.normalDragonListInfo.getNormalDragonUnitInfo(dragonId);
    //     normalDragonInfo.mergeCount ++ ;
    // }

    // exchangeDragon(originGridIndex: number, targetGridIndex: number)
    // {
    //     let targetUnitInfo = this.worldInfo.warPlatformInfo.superInfoList[targetGridIndex];
    //     let originUnitInfo = this.worldInfo.warPlatformInfo.superInfoList[originGridIndex];

    //     if(originGridIndex == targetGridIndex)
    //     {
    //         // 自身格子
    //         cc.log("自身格子");
    //         ListenerManager.getInstance().trigger(ListenerType.OnExchangeDragon, originGridIndex, originGridIndex);
    //     }
    //     else if(targetUnitInfo.locked)
    //     {
    //         // 未解锁
    //         cc.log("未解锁");
    //         ListenerManager.getInstance().trigger(ListenerType.OnExchangeDragon, originGridIndex, originGridIndex);
    //     }
    //     else
    //     {
    //         if(targetUnitInfo.dragonInfo)
    //         {
    //             cc.log("交换位置");
    //             let temp = targetUnitInfo.dragonInfo;
    //             targetUnitInfo.dragonInfo = originUnitInfo.dragonInfo;
    //             originUnitInfo.dragonInfo = temp;

    //             ListenerManager.getInstance().trigger(ListenerType.OnExchangeDragon, originGridIndex, targetGridIndex);
    //         }
    //         else
    //         {
    //             cc.log("空格子");
    //             targetUnitInfo.dragonInfo = originUnitInfo.dragonInfo;
    //             originUnitInfo.dragonInfo = null;

    //             ListenerManager.getInstance().trigger(ListenerType.OnExchangeDragon, originGridIndex, targetGridIndex);
    //         }
    //     }
    // }

    // getMaxDragonIdFromAll(): number
    // {
    //     return this.worldInfo.worldOtherInfo.maxCurDragonId;
    // }

    // getcurDragonCount(dragonId: number): number
    // {
    //     let count = 0;
    //     let unitInfoList = this.worldInfo.warPlatformInfo.unitInfoList;
    //     for(let i = 0; i < unitInfoList.length; ++i)
    //     {
    //         let unitInfo = unitInfoList[i];
    //         if(unitInfo.dragonInfo && unitInfo.dragonInfo.dragonId == dragonId)
    //         {
    //             count++;
    //         }
    //     }
    //     return count;
    // }

    // findEmptyLane()
    // {
    //     let unit = null;
    //     let unitList = this.worldInfo.warPlatformInfo.unitInfoList;
    //     for (let idx=0;idx<5;++idx) {
    //         if(!unitList[idx*2].dragonInfo && 
    //             !unitList[idx*2+1].dragonInfo)
    //         {
    //             unit = this.worldInfo.warPlatformInfo.unitInfoList[idx*2];
    //             break;
    //         }
    //     }
    //     return unit;
    // }

    // findUnit()
    // {
    //     let unit = null;
    //     //monster test
    //     let monsters = StageManager.getInstance().laneMonsters;
    //     for (let key in monsters) {
    //         if (monsters[key]) {
    //             let idx = parseInt(key)*2;
    //             let idx2 = parseInt(key)*2 + 1;
    //             if(!this.worldInfo.warPlatformInfo.unitInfoList[idx].dragonInfo && 
    //                 !this.worldInfo.warPlatformInfo.unitInfoList[idx2].dragonInfo)
    //             {
    //                 unit = this.worldInfo.warPlatformInfo.unitInfoList[idx];
    //                 break;
    //             }
    //         }
    //     }
    //     return unit;
    // }
    // setupDragonInfo(unit,dragonId: number)
    // {
    //     let dragonInfo = new DragonInfo();
    //     dragonInfo.dragonId = dragonId;
    //     unit.dragonInfo = dragonInfo;

    //     ListenerManager.getInstance().trigger(ListenerType.OnBuyDragon, unit, true);

    //     this.worldInfo.worldOtherInfo.eggNum--;

    //     //任务系统-点击龙蛋
    //     TaskManager.getInstance().triggerTask(ETaskTriggerType.hatchEggs);
    //     //新手任务-点击龙蛋
    //     GuideManager.getInstance().clickDragonEgg();
    // }

    // sortEliteDragonPower():any
    // {
    //     let eliteDragonListInfo = this.worldInfo.eliteDragonListInfo;
    //     let powerList = [];
    //     for (let index = 0; index < eliteDragonListInfo.unitInfoList.length; index++) {
    //         if(!eliteDragonListInfo.unitInfoList[index].locked)
    //         {
    //             let id = eliteDragonListInfo.unitInfoList[index].index;
    //             powerList.push({id: id,power: this.getDragonDps(id)});
    //         }
    //     }

    //     powerList.sort((a,b)=>{
    //         return b.power - a.power;
    //     });

    //     return powerList;
    // }


    // setActivityDragonProductInfo() {
    //     let config = GameDataManager.getInstance().getGameData().worldInfo.playerInfo.remoteConfig;
    //     if(config.length > 0) {
    //         config.map(function (cfg) {
    //             if(cfg.cfg_id == CofingEvent.ACTIVITY_DRAGON || cfg.cfg_id == CofingEvent.KNIGHT_DRAGON) {
    //                 ProductManager.getInstance().addProduct(cfg.config);
    //             }
    //         })
    //     }
    // }

    // isDragonKnightActivity(): boolean
    // {
    //     let array = this.worldInfo.playerInfo.remoteConfig;
    //     for (let index = 0; index < array.length; index++)
    //     {
    //         const element = array[index];
    //         //获得远程列表
    //         if (element.cfg_id == CofingEvent.KNIGHT_DRAGON)
    //         {
    //             //判断是否获得商品列表
    //             if (ProductManager.getInstance().getProductInfo(element.config.product_id))
    //             {
    //                 return true;
    //             }
    //             else
    //             {
    //                 return false;
    //             }
    //         }
    //     }
    //     //没有获得远程列表
    //     return false;
    // }

    // //龙特卖
    // isDragonSaleActivity(): boolean
    // {
    //     let activity  = this.worldInfo.worldOtherInfo.dragonSaleActivity;

    //     if(this.worldInfo.worldOtherInfo.guideStatus != EGuideStatus.none)
    //     {
    //         return false;
    //     }
        
    //     let array = GameDataManager.getInstance().getGameData().worldInfo.playerInfo.remoteConfig;
    //     for (let index = 0; index < array.length; index++) {
    //         const element = array[index];
    //         //获得远程列表
    //         if(element.cfg_id == CofingEvent.ACTIVITY_DRAGON)
    //         {
    //             //活动没有登记过 初始化时间
    //             if(activity[CofingEvent.ACTIVITY_DRAGON] == null)
    //             {
    //                 activity[CofingEvent.ACTIVITY_DRAGON] = TimeUtil.getCurrentTime() + ConstValue.ACTIVITY_DRAGON_TIME;
    //                 GameDataManager.getInstance().getGameData().updateWorldOtherInfo();
    //             }
        
    //             //判断是不是过时
    //             if(activity[CofingEvent.ACTIVITY_DRAGON] <= TimeUtil.getCurrentTime())
    //             {
    //                 return false;
    //             }

    //             //判断是否获得商品列表
    //             if(ProductManager.getInstance().getProductInfo(element.config.product_id))
    //             {
    //                 return true;
    //             }
    //             else
    //             {
    //                 return false;
    //             }
    //         }
    //     }
    //     //没有获得远程列表
    //     return false;
    // }


    // buyDragon(dragonId: number)
    // {
    //     if(this.worldInfo.worldOtherInfo.eggNum > 0)
    //     {
    //         let unit = this.findUnit();
    //         if (unit) {
    //             this.setupDragonInfo(unit, dragonId);
    //         }
    //         else {
    //             unit = this.findEmptyLane();
    //             if(unit)
    //             {
    //                 this.setupDragonInfo(unit, dragonId);
    //             }
    //             else
    //             {
    //                 for (let i = 0; i < this.worldInfo.warPlatformInfo.unitInfoList.length; ++i) {
    //                     let unit = this.worldInfo.warPlatformInfo.unitInfoList[i];
    //                     if (unit.dragonInfo == null) {
    //                         this.setupDragonInfo(unit, dragonId);
    //                         return;
    //                     }
    //                 }
    //                 UIHelp.showTip("Not enough space");
    //             }
    //         }
    //     }
    //     else
    //     {
    //         UIHelp.showTip("Not enough Eggs");
    //     }
    // }

    // sendDragon()
    // {
    //     this.worldInfo.normalDragonListInfo.sendNormalDragon();
    // }
    
    // giveDragon(isNormal:boolean,dragonId: number,isShowUI:boolean = true)
    // {
    //     let setupDragon = (unit)=>{
    //         if (unit.dragonInfo == null) {
    //             let dragonInfo = new DragonInfo();
    //             dragonInfo.dragonId = dragonId;
    //             unit.dragonInfo = dragonInfo;
    //             unit.locked = true;

    //             ListenerManager.getInstance().trigger(ListenerType.OnGiveDragon, unit, isNormal);
    //             if(isNormal && this.worldInfo.normalDragonListInfo.getNormalDragonUnitInfo(dragonId).locked)
    //             {
    //                 if(isShowUI)
    //                     ListenerManager.getInstance().trigger(ListenerType.OnShowNewDragon, dragonId, false);
    //                 //普通龙图鉴解锁
    //                 this.worldInfo.normalDragonListInfo.unLockNormalDragon(dragonId);
    //             }
    //             return;
    //         }
    //     }
    //     if(isNormal)
    //     {
    //         let unit = this.findUnit();
    //         if (unit) {
    //             setupDragon(unit);
    //         }
    //         else {
    //             unit = this.findEmptyLane();
    //             if(unit)
    //             {
    //                 setupDragon(unit);
    //             }
    //             else
    //             {
    //                 for (let i = 0; i < this.worldInfo.warPlatformInfo.unitInfoList.length; ++i) {
    //                     let unit = this.worldInfo.warPlatformInfo.unitInfoList[i];
    //                     if (unit.dragonInfo == null) {
    //                         setupDragon(unit);
    //                         return;
    //                     }
    //                 }
    //                 UIHelp.showTip("Not enough space");
    //             }
    //         }
    //     }
    //     else
    //     {
    //         let infoList = this.worldInfo.warPlatformInfo.superInfoList;
    //         for (let i = 0; i < infoList.length; ++i) {
    //             let unit = infoList[i];
    //             if (unit.dragonInfo == null) {
    //                 let dragonInfo = new DragonInfo();
    //                 dragonInfo.dragonId = dragonId;
    //                 unit.dragonInfo = dragonInfo;
    
    //                 ListenerManager.getInstance().trigger(ListenerType.OnGiveDragon, unit, isNormal);
    //                 return;
    //             }
    //         }
    //     }
        
    //     //send mail
    //     //UIHelp.showTip("not enough space");
    // }

    // isCurrLaneHasDragon(lane, monster) {
    //     let hasDragonOnLane = false;
    //     let unitInfoList = GameDataManager.getInstance().getGameData().worldInfo.warPlatformInfo.unitInfoList;
    //     let superInfoList = GameDataManager.getInstance().getGameData().worldInfo.warPlatformInfo.superInfoList;
    //     if(unitInfoList[lane*2+1].dragonInfo && !unitInfoList[lane*2+1].locked && monster.node.position.x >= GridHelp.getGridPosition(unitInfoList[lane*2+1].index).x - 20 ) //dragon alive
    //     {
    //         hasDragonOnLane = true;
    //     }
    //     if(unitInfoList[lane*2].dragonInfo && !unitInfoList[lane*2].locked && monster.node.position.x >= GridHelp.getGridPosition(unitInfoList[lane*2].index).x - 20 ) //dragon alive
    //     {
    //         hasDragonOnLane = true;
    //     }
    //     if(superInfoList[lane].dragonInfo && !superInfoList[lane].locked && monster.node.position.x >= GridHelp.getSuperGridPosition(lane).x - 20) //super dragon alive
    //     {
    //         hasDragonOnLane = true;
    //     }

    //     return hasDragonOnLane;
    // }


    // isPoolFull() : boolean
    // {
    //     for(let i = 0; i < this.worldInfo.warPlatformInfo.unitInfoList.length; ++i)
    //     {
    //         let unit = this.worldInfo.warPlatformInfo.unitInfoList[i];
    //         if(unit.dragonInfo == null)
    //         {
    //             return false;
    //         }
    //     }
    //     //UIHelp.showTip("not enough space");
    //     return true;
    // }

    // getDefaultBuyDragonId(): number
    // {
    //     // let container = ConfigManager.getInstance().getConfig(DragonConfigContainer) as DragonConfigContainer;
    //     // let dragonConfigDataList = container.getLevelStageConfigData();
    //     return 0//dragonConfigDataList[this.worldInfo.worldOtherInfo.maxCurDragonId].defaultBuyId;
    // }

    // updateFlyingDragonTime(dt)
    // {
    //     if(!this.flyingDragonStartTime){
    //         return;
    //     }


    //     if(this.flyingDragonTime > 0)
    //     {
    //         this.flyingDragonTime -= dt;
    //     }
    //     else
    //     {
    //         this.flyingDragonStartTime = false;
    //         this.flyingDragonTime = 0;
    //         ListenerManager.getInstance().trigger(ListenerType.PlayFlyingDragon);
    //     }
    // }
    // isAngryDouble(): boolean
    // {
    //     return this.worldInfo.worldOtherInfo.angryTime > 0;
    // }

    // getAngryTime(): number
    // {
    //     return this.worldInfo.worldOtherInfo.angryTime;
    // }

    // startAngryTime(multipleCount)
    // {
    //     this.worldInfo.worldOtherInfo.angryTime = ConstValue.ANGRY_INCREMENT;
    //     this.worldInfo.worldOtherInfo.angryMultiple = multipleCount;
    //     this.worldInfo.worldOtherInfo.saveAngryTime();
    // }

    // updateAngryTime(dt)
    // {
    //     if(this.worldInfo.worldOtherInfo.angryTime > 0)
    //     {
    //         this.worldInfo.worldOtherInfo.angryTime -= dt;
    //         if(this.worldInfo.worldOtherInfo.angryTime < 0)
    //         {
    //             this.worldInfo.worldOtherInfo.angryTime = 0;
    //             this.worldInfo.worldOtherInfo.saveAngryTime();
    //             ListenerManager.getInstance().trigger(ListenerType.OnEndAngry);
    //         }
    //         if(this.worldInfo.worldOtherInfo.angryTime <= this.worldInfo.worldOtherInfo.nextSaveTime)
    //         {
    //             this.worldInfo.worldOtherInfo.saveAngryTime();
    //         }
    //         ListenerManager.getInstance().trigger(ListenerType.UpdateAngryTime);
    //     }
    // }

    // //探索红点提示计算
    // updateExploreRedPoint(dt) 
    // {
    //     if (this.exploreRedPointNotify) {
    //         return;
    //     }

    //     let exploreData = this.worldInfo.worldOtherInfo.exploreData;
    //     let ticketData = exploreData.ticket;
    //     if (!ticketData.fill_time || ticketData.num >= ConstValue.EXPLORE_TICKET_MAX) {
    //         ListenerManager.getInstance().trigger(ListenerType.OnExploreRedPointShow);
    //         return;
    //     }

    //     let now = TimeUtil.getCurrentTime();
    //     let timeGap = now - ticketData.fill_time;
    //     if (timeGap < 0) {
    //         return;
    //     }

    //     let times = Math.floor(timeGap/ConstValue.EXPLORE_TICKET_FILL_INTERVAL);
    //     if ((times + ticketData.num) >= ConstValue.EXPLORE_TICKET_MAX) {
    //         ListenerManager.getInstance().trigger(ListenerType.OnExploreRedPointShow);
    //     }
    // }

    // //是否探索券满了
    // isExploreTicketFull() {
    //     let exploreData = this.worldInfo.worldOtherInfo.exploreData;
    //     let ticketData = exploreData.ticket;
    //     if (!ticketData.fill_time || ticketData.num >= ConstValue.EXPLORE_TICKET_MAX) {
    //         return true;
    //     }

    //     let now = TimeUtil.getCurrentTime();
    //     let timeGap = now - ticketData.fill_time;
    //     if (timeGap < 0) {
    //         return false;
    //     }

    //     let times = Math.floor(timeGap/ConstValue.EXPLORE_TICKET_FILL_INTERVAL);
    //     if ((times + ticketData.num) >= ConstValue.EXPLORE_TICKET_MAX) {
    //         return true;
    //     }

    //     return false;
    // }

    // updateEventRedPoint(dt)
    // {
    //     ListenerManager.getInstance().trigger(ListenerType.OnEventRedPointShow);
    // }

    // isEventTicketFull()
    // {
    //     // 没有高级龙
    //     let eliteDragonListInfo = this.worldInfo.eliteDragonListInfo;
    //     if ( !eliteDragonListInfo.getEliteDragonIsUnlocked() ) {
    //         return false;
    //     }
    //     let eventData = this.worldInfo.eventInfo.eventCacheList;
    //     for(let i in eventData) {
    //         if (eventData[i].ticket_num >= ConstValue.EVENT_TICKET_MAX) {
    //             return true;
    //         }

    //         let now = TimeUtil.getCurrentTime();
    //         let timeGap = now - eventData[i].fill_time;
    //         if (timeGap > 0) {
    //             let times = Math.floor(timeGap/ConstValue.EVENT_TICKET_FILL_INTERVAL);
    //             if ((times + eventData[i].ticket_num) >= ConstValue.EVENT_TICKET_MAX) {
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }

    // packageRedPointShow() {
    //     let gameData = GameDataManager.getInstance().getGameData();
    //     let dataList = gameData.worldInfo.eliteDragonListInfo.getFragments();
    //     for(let i in dataList) {
    //         if(dataList[i].locked && dataList[i].fragment >= ConstValue.DRAGON_SUMMON_FRAGMENT_NUM) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // dragonListRedPointShow() {
    //     let gameData = GameDataManager.getInstance().getGameData();
    //     let dataList = gameData.worldInfo.eliteDragonListInfo.getUnlockEliteDragonList();
    //     for(let i in dataList) {
    //         if(gameData.canEvolve(dataList[i]))
    //         {
    //             return true;
    //         }
    //     }
    //     return false;
    // }



    // /**
    //  * 获取当前阵容中最大龙ID
    //  */
    // getWarPlatformMaxDragonId()
    // {
    //     let maxDragonId:number = -1;
    //     for(let i = 0; i < this.worldInfo.warPlatformInfo.unitInfoList.length; ++i)
    //     {
    //         let unitInfo = this.worldInfo.warPlatformInfo.unitInfoList[i];
    //         if(unitInfo.dragonInfo)
    //         {
    //             let id = unitInfo.dragonInfo.dragonId;
    //             if(maxDragonId < id)
    //             {
    //                 maxDragonId = id;
    //             }
    //         }
    //     }
    //     return maxDragonId;
    // }

    // updateEgg(dt)
    // {
    //     let isOwned = GameDataManager.getInstance().getGameData().worldInfo.worldOtherInfo.ownedSubscription;
    //     if(this.worldInfo.worldOtherInfo.eggNum >= (isOwned ? ConstValue.EGG_VIP_MAX_CNT : ConstValue.EGG_MAX_CNT))
    //         return;
    //     this.eggTime += dt;
    //     let recoverTime = this.getEggRecoverTime();
    //     if(this.eggTime > recoverTime)
    //     {
    //         this.eggTime = 0;
    //         this.worldInfo.worldOtherInfo.eggNum++;
    //     }
    // }

    // updateOfflineTime(dt: number)
    // {
    //     if(!this.beginUpdateOfflineTime)
    //     {
    //         return;
    //     }
    //     if(this.worldInfo.worldOtherInfo.offlineTime != -1 && TimeUtil.getCurrentTime() - this.worldInfo.worldOtherInfo.offlineTime > ConstValue.OFFLINE_UPDATE_INTERVAL * 1000)
    //     {
    //         this.worldInfo.worldOtherInfo.offlineTime = TimeUtil.getCurrentTime();
    //         //cc.log("update offline time");
    //     }
    // }

    // getEggRecoverTime() {
    //     let speedUpMultiple =  GameDataManager.getInstance().getGameData().worldInfo.worldOtherInfo.angryMultiple;
    //     let recoverTime = this.isAngryDouble() ? ConstValue.EGG_RECOVER_TIME / speedUpMultiple : ConstValue.EGG_RECOVER_TIME;
    //     let isOwned = GameDataManager.getInstance().getGameData().worldInfo.worldOtherInfo.ownedSubscription;
    //     if(isOwned) 
    //     {
    //         recoverTime = recoverTime/1.5;
    //     }
    //     return recoverTime;
    // }


    // getDragonSecondGold(dragonData: DragonData): string
    // {
    //     let rate = GameDataManager.getInstance().getGameData().getEarningRate();
    //     // let container = ConfigManager.getInstance().getConfig(DragonConfigContainer) as DragonConfigContainer;
    //     // let dragonConfigDataList = container.getLevelStageConfigData();
    //     let dragonConfigData = dragonData;
    //     let reward = numberUtil.galaxyMut(dragonConfigData.getOutput(), 1);
    //     let coins = numberUtil.galaxyMut(reward, rate);
    //     return coins;
    // }

    // getEarningRate() {
    //     let rate = 1;
    //     let vip = this.worldInfo.worldOtherInfo.ownedSubscription;
    //     let giftEarningRate = GameDataManager.getInstance().getGameData().worldInfo.worldOtherInfo.dragonGiftRate;
    //     let angryBuff = GameDataManager.getInstance().getGameData().isAngryDouble() ? 2 : 1;
    //     let baseEarningRate = this.getBaseEarningRate();
    //     // buff 驯龙师 好友 过关 buff 皮肤 为加
    //     rate = rate * (vip ? 1.3 : 1) * giftEarningRate * angryBuff * baseEarningRate;
    //     return rate;
    // }

    // getBaseEarningRate()
    // {
    //     //let trainerInfo = this.curSublandInfo.trainerInfo;
    //     //let skillRate = trainerInfo.getSkillRate(0);
    //     let stageBuff = GameDataManager.getInstance().getGameData().worldInfo.worldOtherInfo.stageBuff;
    //     let friendRate = GameDataManager.getInstance().getGameData().worldInfo.worldOtherInfo.friendBuff;
    //     //以0为基础
    //     let islandBuff = 0;//this.getIslandBuff();
        
    //     return (1  + friendRate + stageBuff - 2 + islandBuff);
    // }

    // getSecondReward(count) {
    //     let totalReward = '0';
    //     for(let i = 0; i < this.worldInfo.warPlatformInfo.unitInfoList.length; ++i)
    //     {
    //         let unitInfo = this.worldInfo.warPlatformInfo.unitInfoList[i];
    //         if(unitInfo.dragonInfo)
    //         {
    //             let container = ConfigManager.getInstance().getConfig(DragonConfigContainer) as DragonConfigContainer;
    //             let dragonConfigDataList = container.getDragonConfigData();
    //             let dragonConfigData = dragonConfigDataList[unitInfo.dragonInfo.dragonId];

    //             //totalReward += dragonConfigData.output * count;
    //             let reward = numberUtil.galaxyMut(dragonConfigData.getOutput(), count);
    //             totalReward = numberUtil.galaxyAdd(totalReward, reward);
    //         }
    //     }
    //     return totalReward;
    // }

    // isDragonUnlock(id: number)
    // {
    //     if(id < 1000)
    //     {
    //         let normalDragonInfo = this.worldInfo.normalDragonListInfo.getNormalDragonUnitInfo(id);
    //         return !normalDragonInfo.locked;
    //     }
    //     else
    //     {
    //         let eliteDragonInfo = this.worldInfo.eliteDragonListInfo.getEliteDragonUnitInfo(id);
    //         return !eliteDragonInfo.locked;
    //     }

    // }

    // getDragonMaxLevel():number
    // {
    //     let gameData = GameDataManager.getInstance().getGameData();
    //     let levelStageConfigContainer = ConfigManager.getInstance().getConfig(LevelStageConfigContainer) as LevelStageConfigContainer
    //     let maxlevel = levelStageConfigContainer.getDragonMaxLevel(gameData.worldInfo.playerInfo.level);
    //     return maxlevel;
    // }

    // maxLevelTip(): string
    // {
    //     let str = "";
    //     let levelStageConfigContainer = ConfigManager.getInstance().getConfig(LevelStageConfigContainer) as LevelStageConfigContainer
    //     let level = levelStageConfigContainer.getNextPlayLevel(this.worldInfo.playerInfo.level);
    //     if(level > 0)
    //     {
    //         str = "Unlock at Lv." + level;
    //     }
    //     else
    //     {
    //         str = "Max level";
    //     }
    //     return str;
    // }

    // levelUpDragon(id: number, callback?: Function)
    // {
    //     if (!this.isDragonUnlock(id))
    //     {
    //         cc.log("未解锁");
    //         return;
    //     }

    //     if(id < 1000)
    //     {
    //         let normalDragonConfigContainer = ConfigManager.getInstance().getConfig(NormalDragonConfigContainer) as NormalDragonConfigContainer;
    //         let normalDragonInfo = this.worldInfo.normalDragonListInfo.getNormalDragonUnitInfo(id);
    //         cc.log("zmj  aa",this.getDragonMaxLevel());
    //         if (normalDragonConfigContainer.getLevel(normalDragonInfo) >= this.getDragonMaxLevel())
    //         {
    //             UIHelp.showTip(this.maxLevelTip());
    //         }
    //         else
    //         {
    //             let normalDragonGrowthData = normalDragonConfigContainer.getLevelNormalDragonGrowthData(normalDragonInfo);

    //             if(normalDragonInfo.mergeCount >= normalDragonInfo.mergeCost)
    //             {
    //                 Ymn.getInstance().logEvent('dragon_collection_upgrade_click', {type: id});
    //                 UIHelp.onBtnCoins(normalDragonGrowthData.cost,()=>{
    //                     normalDragonInfo.mergeCount -= normalDragonInfo.mergeCost;
    //                     Ymn.getInstance().logEvent('dragon_collection_upgrade_success', {type: id});
    //                     this.worldInfo.normalDragonListInfo.normalDragonLevelUp(id);
    //                     ListenerManager.getInstance().trigger(ListenerType.OnDragonLevelUp);
    //                     callback && callback();     
    //                 });
    //             }
    //             else
    //             {
    //                 UIHelp.showTip("Not enough merge times.")
    //             }
    //         }
    //     }
    //     else
    //     {
    //         let eliteDragonConfigContainer = ConfigManager.getInstance().getConfig(EliteDragonConfigContainer) as EliteDragonConfigContainer;
    //         let eliteDragonInfo = this.worldInfo.eliteDragonListInfo.getEliteDragonUnitInfo(id);
    //         if(eliteDragonConfigContainer.getLevel(eliteDragonInfo) >= this.getDragonMaxLevel())
    //         {
    //             UIHelp.showTip(this.maxLevelTip());
    //         }
    //         else
    //         {
    //             let eliteDragonGrowthData = eliteDragonConfigContainer.getLevelEliteDragonGrowthData(eliteDragonInfo);

    //             // TODO 要花碎片
    //             let levelUpCostFragment = eliteDragonConfigContainer.getLevelUpCostFragment(eliteDragonInfo);
    //             if(eliteDragonInfo.fragment  >= levelUpCostFragment)
    //             {
    //                 // TODO 要花钱
    //                 Ymn.getInstance().logEvent('dragon_collection_upgrade_click', {type: id});
    //                 UIHelp.onBtnCoins(eliteDragonGrowthData.cost,()=>{
    //                     Ymn.getInstance().logEvent('dragon_collection_upgrade_success', {type: id});
    //                     // 减少碎片
    //                     eliteDragonInfo.fragment -= levelUpCostFragment;
    //                     this.worldInfo.eliteDragonListInfo.eliteDragonLevelUp(id);
    //                     ListenerManager.getInstance().trigger(ListenerType.OnDragonLevelUp);
    //                     callback && callback();    
    //                 })
    //             }
    //             else
    //             {
    //                 UIHelp.showTip("Not enough shard.");
    //             }
                
    //         }
    //     }
    //     ListenerManager.getInstance().trigger(ListenerType.EvolveRedPoint);
    // }

    // canEvolve(dragonId: number):boolean
    // {
    //     let eliteDragonConfigContainer = ConfigManager.getInstance().getConfig(EliteDragonConfigContainer) as EliteDragonConfigContainer;

    //     let eliteDragonInfo = this.worldInfo.eliteDragonListInfo.getEliteDragonUnitInfo(dragonId);
    //     let data = eliteDragonConfigContainer.getEvolveLevelUpData(eliteDragonInfo);

    //     let key = false;
    //     if (eliteDragonInfo.fragment >= data.fragment && numberUtil.cmpBigInt(this.worldInfo.playerInfo.gold, data.coin) >= 0 && eliteDragonInfo.evolveLevel != 3)
    //     {
    //         key = true;
    //     }
    //     else
    //     {
    //         key = false;
    //     }
    //     return key;
    // }
    
    // getAllUnlockEliteDragonDps()
    // {
    //     let list = GameDataManager.getInstance().getGameData().worldInfo.eliteDragonListInfo.getUnlockEliteDragonList();
    //     let totalPower = 0;
    //     for(let key in list)
    //     {
    //         totalPower += GameDataManager.getInstance().getGameData().getDragonDps(list[key]);
    //     }
    //     return totalPower;
    // }
    

    // getDragonDps(id: number): number
    // {
    //     let hp = 0;
    //     let battleAttribute = new BattleAttribute();
    //     let evolveLevel = 0;

    //     if (id < 1000)
    //     {
    //         let normalDragonConfigContainer = ConfigManager.getInstance().getConfig(NormalDragonConfigContainer) as NormalDragonConfigContainer;
    //         let gameData = GameDataManager.getInstance().getGameData();
    //         let normalDragonInfo = gameData.worldInfo.normalDragonListInfo.getNormalDragonUnitInfo(id);
    //         let normalDragonBaseData = normalDragonConfigContainer.getNormalDragonBaseData(id);
    //         let normalDragonGrowthData = normalDragonConfigContainer.getLevelNormalDragonGrowthData(normalDragonInfo);
    //         battleAttribute.attribute = normalDragonBaseData.attribute;
    //         battleAttribute.def = normalDragonGrowthData.def;
    //         battleAttribute.atk = normalDragonGrowthData.atk;
    //         battleAttribute.attackSpeed = normalDragonGrowthData.attackSpeed;
    //         battleAttribute.defensePenetration = normalDragonGrowthData.defensePenetration;
    //         battleAttribute.immunity = normalDragonGrowthData.immunity;
    //         battleAttribute.attritubeDamage = normalDragonGrowthData.attritubeDamage;
    //         battleAttribute.criticalRate = normalDragonGrowthData.criticalRate;
    //         battleAttribute.criticalDamage = normalDragonGrowthData.criticalDamage;
    //         hp = normalDragonGrowthData.hp;
    //     }
    //     else
    //     {
    //         let eliteDragonConfigContainer = ConfigManager.getInstance().getConfig(EliteDragonConfigContainer) as EliteDragonConfigContainer;
    //         let gameData = GameDataManager.getInstance().getGameData();
    //         let eliteDragonInfo = gameData.worldInfo.eliteDragonListInfo.getEliteDragonUnitInfo(id);
    //         let eliteDragonBaseData = eliteDragonConfigContainer.getEliteDragonBaseData(id);
    //         let eliteDragonGrowthData = eliteDragonConfigContainer.getLevelEliteDragonGrowthData(eliteDragonInfo);
    //         battleAttribute.attribute = eliteDragonBaseData.attribute;
    //         battleAttribute.def = eliteDragonGrowthData.def;
    //         battleAttribute.atk = eliteDragonGrowthData.atk;
    //         battleAttribute.attackSpeed = eliteDragonGrowthData.attackSpeed;
    //         battleAttribute.defensePenetration = eliteDragonGrowthData.defensePenetration;
    //         battleAttribute.immunity = eliteDragonGrowthData.immunity;
    //         battleAttribute.attritubeDamage = eliteDragonGrowthData.attritubeDamage;
    //         battleAttribute.criticalRate = eliteDragonGrowthData.criticalRate;
    //         battleAttribute.criticalDamage = eliteDragonGrowthData.criticalDamage;
    //         hp = eliteDragonGrowthData.hp;
    //         evolveLevel = eliteDragonInfo.evolveLevel;
    //     }
        
    //     return this.getDps(battleAttribute,hp,evolveLevel);
    // }

    // //战斗力=攻击+血量/8+防御*0.33+暴击率*1000+暴击伤害*10+无视防御力*1000+强化属性伤害*1000+无视伤害*1000
    // getDps(battleAttribute:BattleAttribute, hp:number, evolveLevel:number)
    // {
    //     let sum = 0.2 * (battleAttribute.atk +
    //         hp / 8 +
    //         battleAttribute.def * 0.3) +
    //         battleAttribute.criticalRate * 1000 +
    //         battleAttribute.criticalDamage * 10 +
    //         battleAttribute.defensePenetration * 1000 +
    //         battleAttribute.attritubeDamage * 1000 +
    //         battleAttribute.immunity * 1000 +
    //         evolveLevel * 1000
    //     return Math.floor(sum);
    // }

    // getMaxSecondReward(count)
    // {
    //     let totalReward = '0';
    //     let unitInfoList = this.worldInfo.warPlatformInfo.unitInfoList;
    //     for(let i = 0; i < unitInfoList.length; ++i)
    //     {
    //         let unitInfo = unitInfoList[i];
    //         if(unitInfo.dragonInfo)
    //         {
    //             let container = ConfigManager.getInstance().getConfig(DragonConfigContainer) as DragonConfigContainer;
    //             let dragonConfigDataList = container.getDragonConfigData();
    //             let dragonConfigData = dragonConfigDataList[unitInfo.dragonInfo.dragonId];
    //             let reward = numberUtil.galaxyMut(dragonConfigData.getOutput(), count);
    //             totalReward = numberUtil.galaxyAdd(totalReward, reward);
    //         }
    //     }
    //     return totalReward;
    // }

    // calculateOffline(): string
    // {
    //     if(this.worldInfo.worldOtherInfo.offlineTime == -1)
    //     {
    //         this.worldInfo.worldOtherInfo.offlineTime = TimeUtil.getCurrentTime();
    //         this.beginUpdateOfflineTime = true;
    //         return;
    //     }
    //     let offlineTime = this.worldInfo.worldOtherInfo.offlineTime;
    //     let totalReward = '0';
    //     let curTime = TimeUtil.getCurrentTime();
    //     let delta = Math.floor((curTime - offlineTime) / 1000);

    //     if(delta < 0)
    //     {
    //         delta = 0;
    //     }
    //     let eggNum = Math.floor(delta/this.getEggRecoverTime());
    //     let isOwned = GameDataManager.getInstance().getGameData().worldInfo.worldOtherInfo.ownedSubscription;
    //     let maxCnt = isOwned ? ConstValue.EGG_VIP_MAX_CNT : ConstValue.EGG_MAX_CNT
    //     if(this.worldInfo.worldOtherInfo.eggNum + eggNum >= maxCnt)
    //     {
    //         this.worldInfo.worldOtherInfo.eggNum = maxCnt;
    //     }
    //     else
    //     {
    //         this.worldInfo.worldOtherInfo.eggNum += eggNum;
    //     }

    //     delta = delta > ConstValue.OFFLINE_MAX_TIME ? ConstValue.OFFLINE_MAX_TIME : delta;

    //     let container = ConfigManager.getInstance().getConfig(StageConfigContainer) as StageConfigContainer;
    //     let stageConfigDataList = container.getStageConfigData();
    //     let stageData = stageConfigDataList[this.worldInfo.playerInfo.bestStage - 1];
    //     let count = Math.floor(delta / stageData.clearTime);
    //     let oldStage = this.worldInfo.playerInfo.stage;
    //     let newStage = this.worldInfo.playerInfo.stage + count;

    //     let exp = count * stageData.stageExp;
    //     let oldLevel = this.worldInfo.playerInfo.level;
    //     let oldExp = this.worldInfo.playerInfo.exp;
    //     this.worldInfo.playerInfo.exp += exp;
    //     let newLevel = this.worldInfo.playerInfo.level;
    //     let newExp = this.worldInfo.playerInfo.exp;
    //     if(newStage > this.worldInfo.playerInfo.bestStage)
    //     {
    //         newStage = this.worldInfo.playerInfo.bestStage;
    //     }
    //     this.worldInfo.playerInfo.stage = newStage;
    //     totalReward = numberUtil.galaxyMut(count, stageData.stageEarning);
    //     if(numberUtil.cmpBigInt(totalReward, 0) > 0) {
    //         UIManager.getInstance().showUI(OfflineUI,(ui:OfflineUI)=>{
    //             ui.initUI(totalReward, delta, oldStage, newStage, oldLevel, newLevel);
    //         });
    //     }
    //     this.worldInfo.worldOtherInfo.offlineTime = TimeUtil.getCurrentTime();
    //     this.beginUpdateOfflineTime = true;
        
        
    //     let playerInfo = this.worldInfo.playerInfo;
    //     let levelcontainer = ConfigManager.getInstance().getConfig(LevelStageConfigContainer) as LevelStageConfigContainer;
    //     let configData = levelcontainer.getLevelStageConfigData();
    //     let curLevelConfig = configData[playerInfo.level - 1];
    //     while(playerInfo.exp / curLevelConfig.exp > 1 && playerInfo.level < ConstValue.MAX_LEVEL)
    //     {
    //         curLevelConfig = configData[playerInfo.level];
    //         if(!curLevelConfig)
    //             break;
    //         playerInfo.level ++;
    //     }
    // }

    // // public getCurTimeStamp()
    // // {
    // //     let localTime = new Date().getTime();
    // //     return localTime + this.worldInfo.worldOtherInfo.timeoffset;
    // // }

    // public sendReward(data:{id:number,value:string}[], callback?:Function, showPopup:boolean = true)
    // {
    //     let rewardList: RewardData[] = [];
    //     let container = ConfigManager.getInstance().getConfig(RewardConfigContainer) as RewardConfigContainer;
    //     for(let i in data) {
    //         let reward = container.getRewardConfigDataById(data[i].id);
    //         if(reward) {
    //             reward.value = data[i].value;
    //             rewardList.push(reward);
    //         }
    //     }
    //     if(rewardList.length > 0) {
    //         UIHelp.sendReward(rewardList, callback, showPopup);
    //     }
    // }

    // public addReward(rewardList:RewardData[], showTip:boolean = false)
    // {
    //     let msgShow = false;
    //     let gold: string = "0";
    //     let gem: string = "0";

    //     for(let i in rewardList) {
    //         let reward = rewardList[i];
    //         switch (reward.type) {
    //             case ERewardType.gold:
    //                 gold = numberUtil.galaxyAdd(gold,reward.value);
    //                 break;
    //             case ERewardType.gem:
    //                 gem = numberUtil.galaxyAdd(gem,reward.value);
    //                 break;
    //             case ERewardType.exploreTicket:
    //                 GameDataManager.getInstance().getGameData().worldInfo.worldOtherInfo.exploreData.ticket.num += Number(reward.value);
    //                 break;
    //             case ERewardType.commonDragon:
    //                 for(let i = 0; i < Number(reward.value); i++) {
    //                     if(GameDataManager.getInstance().getGameData().isPoolFull()) {
    //                         if(!msgShow) {
    //                             UIHelp.showTip("Not enough land, merge more monsters!");
    //                             msgShow = true;
    //                         }
    //                         GameDataManager.getInstance().getGameData().worldInfo.normalDragonListInfo.saveNormalDragon(reward.subType, 1);
    //                     } else {
    //                         GameDataManager.getInstance().getGameData().giveDragon(true, reward.subType,false);
    //                         if(showTip) UIHelp.showTip("+" + reward.desc);
    //                     }
    //                 }
    //                 break;
    //             case ERewardType.superDragon:
    //                 for(let i = 0; i < Number(reward.value); i++) {
    //                     GameDataManager.getInstance().getGameData().worldInfo.eliteDragonListInfo.giveEliteDragon(reward.subType);
    //                 }
    //                 break;
    //             case ERewardType.superDragonFragment:
    //                 GameDataManager.getInstance().getGameData().worldInfo.eliteDragonListInfo.addFragment(reward.subType, Number(reward.value));
    //                 if(showTip) UIHelp.showTip("+" + reward.desc);
    //                 break;
    //         }
    //     }
    //     if(gold != "0")
    //     {
    //         if(showTip) UIHelp.showTip('+' + numberUtil.unit_format(gold) + ' coins');
    //         UIHelp.addCoinAndPlayEffect(gold);
    //     }
    //     if(gem != "0")
    //     {
    //         if(showTip) UIHelp.showTip('+' + numberUtil.unit_format(gem) + ' gems');
    //         UIHelp.addGemAndPlayEffect(gem);
    //     }
    // }

    // calculateWeekVip()
    // {
    //     if(this.worldInfo.worldOtherInfo.ownedSubscription)
    //     {
    //         let nowTime = TimeUtil.getCurrentTime();
    //         if(!TimeUtil.isOneDay(this.worldInfo.worldOtherInfo.weekVipRewardTime, nowTime)) {
    //             let nowAutoPlayTime = this.worldInfo.worldOtherInfo.autoPlayTime + ConstValue.AUTO_PLAY_TIME_VIP;
    //             if(nowAutoPlayTime > ConstValue.AUTO_PLAY_TIME_MAX) {
    //                 nowAutoPlayTime = ConstValue.AUTO_PLAY_TIME_MAX;
    //             }
    //             this.worldInfo.worldOtherInfo.autoPlayTime = nowAutoPlayTime;
    //             this.worldInfo.worldOtherInfo.weekVipRewardTime = nowTime;

    //             MailManager.getInstance().addMail(EMailType.vip,[{id:201,value:ConstValue.VIP_REWARD_GEM_VALUE}]);
    //         }
    //     }
    //     else if(this.worldInfo.playerInfo.bestStage >= 5)
    //     {
    //         UIManager.getInstance().showUI(WeekVipUI);
    //     }
    // }

    // updateEventTeam(id)
    // {
    //     let eliteDragonListInfo = this.worldInfo.eliteDragonListInfo;
    //     if(eliteDragonListInfo.getUnlockEliteDragonList().length <= ConstValue.EVENT_TEAM_MAX) {
    //         let eventTeam = this.worldInfo.eventInfo.team;
    //         if(eventTeam.length < ConstValue.EVENT_TEAM_MAX) {
    //             eventTeam.push(id);
    //             ListenerManager.getInstance().trigger(ListenerType.UpdateEventTeam);
    //         }
    //     }
    // }
}