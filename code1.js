gdjs.Barrel_32GameCode = {};
gdjs.Barrel_32GameCode.GDSuperArioObjects4_1final = [];

gdjs.Barrel_32GameCode.forEachIndex3 = 0;

gdjs.Barrel_32GameCode.forEachObjects3 = [];

gdjs.Barrel_32GameCode.forEachTemporary3 = null;

gdjs.Barrel_32GameCode.forEachTotalCount3 = 0;

gdjs.Barrel_32GameCode.GDSuperArioObjects1= [];
gdjs.Barrel_32GameCode.GDSuperArioObjects2= [];
gdjs.Barrel_32GameCode.GDSuperArioObjects3= [];
gdjs.Barrel_32GameCode.GDSuperArioObjects4= [];
gdjs.Barrel_32GameCode.GDSuperArioObjects5= [];
gdjs.Barrel_32GameCode.GDwideblockObjects1= [];
gdjs.Barrel_32GameCode.GDwideblockObjects2= [];
gdjs.Barrel_32GameCode.GDwideblockObjects3= [];
gdjs.Barrel_32GameCode.GDwideblockObjects4= [];
gdjs.Barrel_32GameCode.GDwideblockObjects5= [];
gdjs.Barrel_32GameCode.GDgorillaObjects1= [];
gdjs.Barrel_32GameCode.GDgorillaObjects2= [];
gdjs.Barrel_32GameCode.GDgorillaObjects3= [];
gdjs.Barrel_32GameCode.GDgorillaObjects4= [];
gdjs.Barrel_32GameCode.GDgorillaObjects5= [];
gdjs.Barrel_32GameCode.GDmetalbarObjects1= [];
gdjs.Barrel_32GameCode.GDmetalbarObjects2= [];
gdjs.Barrel_32GameCode.GDmetalbarObjects3= [];
gdjs.Barrel_32GameCode.GDmetalbarObjects4= [];
gdjs.Barrel_32GameCode.GDmetalbarObjects5= [];
gdjs.Barrel_32GameCode.GDladderObjects1= [];
gdjs.Barrel_32GameCode.GDladderObjects2= [];
gdjs.Barrel_32GameCode.GDladderObjects3= [];
gdjs.Barrel_32GameCode.GDladderObjects4= [];
gdjs.Barrel_32GameCode.GDladderObjects5= [];
gdjs.Barrel_32GameCode.GDbarrelObjects1= [];
gdjs.Barrel_32GameCode.GDbarrelObjects2= [];
gdjs.Barrel_32GameCode.GDbarrelObjects3= [];
gdjs.Barrel_32GameCode.GDbarrelObjects4= [];
gdjs.Barrel_32GameCode.GDbarrelObjects5= [];
gdjs.Barrel_32GameCode.GDbarreldecorObjects1= [];
gdjs.Barrel_32GameCode.GDbarreldecorObjects2= [];
gdjs.Barrel_32GameCode.GDbarreldecorObjects3= [];
gdjs.Barrel_32GameCode.GDbarreldecorObjects4= [];
gdjs.Barrel_32GameCode.GDbarreldecorObjects5= [];
gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects1= [];
gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects2= [];
gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects3= [];
gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects4= [];
gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects5= [];
gdjs.Barrel_32GameCode.GDPrincessBeachObjects1= [];
gdjs.Barrel_32GameCode.GDPrincessBeachObjects2= [];
gdjs.Barrel_32GameCode.GDPrincessBeachObjects3= [];
gdjs.Barrel_32GameCode.GDPrincessBeachObjects4= [];
gdjs.Barrel_32GameCode.GDPrincessBeachObjects5= [];
gdjs.Barrel_32GameCode.GDbackparryObjects1= [];
gdjs.Barrel_32GameCode.GDbackparryObjects2= [];
gdjs.Barrel_32GameCode.GDbackparryObjects3= [];
gdjs.Barrel_32GameCode.GDbackparryObjects4= [];
gdjs.Barrel_32GameCode.GDbackparryObjects5= [];
gdjs.Barrel_32GameCode.GDparryhotterObjects1= [];
gdjs.Barrel_32GameCode.GDparryhotterObjects2= [];
gdjs.Barrel_32GameCode.GDparryhotterObjects3= [];
gdjs.Barrel_32GameCode.GDparryhotterObjects4= [];
gdjs.Barrel_32GameCode.GDparryhotterObjects5= [];
gdjs.Barrel_32GameCode.GDengineerboardObjects1= [];
gdjs.Barrel_32GameCode.GDengineerboardObjects2= [];
gdjs.Barrel_32GameCode.GDengineerboardObjects3= [];
gdjs.Barrel_32GameCode.GDengineerboardObjects4= [];
gdjs.Barrel_32GameCode.GDengineerboardObjects5= [];

gdjs.Barrel_32GameCode.conditionTrue_0 = {val:false};
gdjs.Barrel_32GameCode.condition0IsTrue_0 = {val:false};
gdjs.Barrel_32GameCode.condition1IsTrue_0 = {val:false};
gdjs.Barrel_32GameCode.condition2IsTrue_0 = {val:false};
gdjs.Barrel_32GameCode.condition3IsTrue_0 = {val:false};
gdjs.Barrel_32GameCode.condition4IsTrue_0 = {val:false};
gdjs.Barrel_32GameCode.condition5IsTrue_0 = {val:false};
gdjs.Barrel_32GameCode.condition6IsTrue_0 = {val:false};
gdjs.Barrel_32GameCode.conditionTrue_1 = {val:false};
gdjs.Barrel_32GameCode.condition0IsTrue_1 = {val:false};
gdjs.Barrel_32GameCode.condition1IsTrue_1 = {val:false};
gdjs.Barrel_32GameCode.condition2IsTrue_1 = {val:false};
gdjs.Barrel_32GameCode.condition3IsTrue_1 = {val:false};
gdjs.Barrel_32GameCode.condition4IsTrue_1 = {val:false};
gdjs.Barrel_32GameCode.condition5IsTrue_1 = {val:false};
gdjs.Barrel_32GameCode.condition6IsTrue_1 = {val:false};


gdjs.Barrel_32GameCode.asyncCallback12404300 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("engineerboard"), gdjs.Barrel_32GameCode.GDengineerboardObjects3);
gdjs.copyArray(runtimeScene.getObjects("parryhotter"), gdjs.Barrel_32GameCode.GDparryhotterObjects3);
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDengineerboardObjects3.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDengineerboardObjects3[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound\\change appearnace.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDparryhotterObjects3.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDparryhotterObjects3[i].setAnimation(gdjs.Barrel_32GameCode.GDparryhotterObjects3[i].getAnimation() + (1));
}
}}
gdjs.Barrel_32GameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.Barrel_32GameCode.asyncCallback12404300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Barrel_32GameCode.asyncCallback12693236 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("barrel"), gdjs.Barrel_32GameCode.GDbarrelObjects3);
gdjs.copyArray(runtimeScene.getObjects("barreldecor"), gdjs.Barrel_32GameCode.GDbarreldecorObjects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "Sound\\appear.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarrelObjects3.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarrelObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarreldecorObjects3.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarreldecorObjects3[i].hide(false);
}
}}
gdjs.Barrel_32GameCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.Barrel_32GameCode.asyncCallback12693236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Barrel_32GameCode.asyncCallback13839476 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("barrel"), gdjs.Barrel_32GameCode.GDbarrelObjects3);
gdjs.copyArray(runtimeScene.getObjects("barreldecor"), gdjs.Barrel_32GameCode.GDbarreldecorObjects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "Sound\\change appearnace.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarrelObjects3.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarrelObjects3[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarreldecorObjects3.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarreldecorObjects3[i].setAnimation(0);
}
}}
gdjs.Barrel_32GameCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Barrel_32GameCode.asyncCallback13839476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Barrel_32GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition3IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "intro";
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Barrel_32GameCode.condition2IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition3IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14030916);
}
}}
}
}
if (gdjs.Barrel_32GameCode.condition3IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\GG\\34 how built so fast help from barry.ogg", 1, false, 100, 1);
}}

}


{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition3IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "intro";
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Barrel_32GameCode.condition2IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition3IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14177044);
}
}}
}
}
if (gdjs.Barrel_32GameCode.condition3IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sound\\appear.wav", false, 100, 1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "parry hotter");
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\GG\\35 more original okay barry....ogg", 1, false, 100, 1);
}}

}


{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition3IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "intro";
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Barrel_32GameCode.condition2IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition3IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11019564);
}
}}
}
}
if (gdjs.Barrel_32GameCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("parryhotter"), gdjs.Barrel_32GameCode.GDparryhotterObjects2);
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\GG\\36 Hotter, Parry hotter.ogg", 1, false, 100, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound\\change appearnace.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDparryhotterObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDparryhotterObjects2[i].setAnimation(gdjs.Barrel_32GameCode.GDparryhotterObjects2[i].getAnimation() + (1));
}
}}

}


{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition3IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "intro";
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Barrel_32GameCode.condition2IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition3IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12725052);
}
}}
}
}
if (gdjs.Barrel_32GameCode.condition3IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\GG\\37 construction engineer 3 seconds in.ogg", 1, false, 100, 1);
}
{ //Subevents
gdjs.Barrel_32GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition3IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "intro";
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Barrel_32GameCode.condition2IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition3IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12258460);
}
}}
}
}
if (gdjs.Barrel_32GameCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("parryhotter"), gdjs.Barrel_32GameCode.GDparryhotterObjects2);
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\GG\\38 ...glasses, and lightning bolt is....ogg", 1, false, 100, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound\\change appearnace.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDparryhotterObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDparryhotterObjects2[i].setAnimation(gdjs.Barrel_32GameCode.GDparryhotterObjects2[i].getAnimation() + (1));
}
}}

}


{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition3IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "intro";
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Barrel_32GameCode.condition2IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition3IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14450044);
}
}}
}
}
if (gdjs.Barrel_32GameCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("parryhotter"), gdjs.Barrel_32GameCode.GDparryhotterObjects2);
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\GG\\39 lightning bolt on forehead, parry hotter built contraption.ogg", 1, false, 100, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound\\change appearnace.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDparryhotterObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDparryhotterObjects2[i].setAnimation(gdjs.Barrel_32GameCode.GDparryhotterObjects2[i].getAnimation() + (1));
}
}}

}


{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition3IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 6;
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "intro";
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Barrel_32GameCode.condition2IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition3IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14452092);
}
}}
}
}
if (gdjs.Barrel_32GameCode.condition3IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "parry hotter");
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\GG\\40 oreo cookies.ogg", 1, false, 100, 1);
}
{ //Subevents
gdjs.Barrel_32GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition3IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 7;
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "intro";
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Barrel_32GameCode.condition2IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition3IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14454620);
}
}}
}
}
if (gdjs.Barrel_32GameCode.condition3IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\GG\\41 wooden oreo cookies.ogg", 1, false, 100, 1);
}
{ //Subevents
gdjs.Barrel_32GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition3IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 8;
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "intro";
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Barrel_32GameCode.condition2IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition3IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14457260);
}
}}
}
}
if (gdjs.Barrel_32GameCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SuperArio"), gdjs.Barrel_32GameCode.GDSuperArioObjects1);
gdjs.copyArray(runtimeScene.getObjects("barrel"), gdjs.Barrel_32GameCode.GDbarrelObjects1);
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 600, 0, 2);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\4 Super Ario Barrel Game.wav", 1000, true, 100, 1);
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarrelObjects1.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarrelObjects1[i].activateBehavior("Physics2", true);
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects1.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(false);
}
}{runtimeScene.getVariables().getFromIndex(1).setString("game");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "new barrel");
}}

}


};gdjs.Barrel_32GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Barrel_32GameCode.GDSuperArioObjects3, gdjs.Barrel_32GameCode.GDSuperArioObjects4);


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition1IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14461092);
}
}}
if (gdjs.Barrel_32GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Barrel_32GameCode.GDSuperArioObjects4 */
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].setAnimationName("jump");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Voice Over\\Super Ario\\202 hep - jump.ogg", false, 100, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound\\jump.wav", false, 100, 1);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3000);
}}

}


{

gdjs.copyArray(gdjs.Barrel_32GameCode.GDSuperArioObjects3, gdjs.Barrel_32GameCode.GDSuperArioObjects4);


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition1IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14462748);
}
}}
if (gdjs.Barrel_32GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Barrel_32GameCode.GDSuperArioObjects4 */
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].flipX(true);
}
}}

}


{

gdjs.copyArray(gdjs.Barrel_32GameCode.GDSuperArioObjects3, gdjs.Barrel_32GameCode.GDSuperArioObjects4);


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition1IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14463772);
}
}}
if (gdjs.Barrel_32GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Barrel_32GameCode.GDSuperArioObjects4 */
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.Barrel_32GameCode.GDSuperArioObjects3, gdjs.Barrel_32GameCode.GDSuperArioObjects4);


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").getCurrentSpeed() != 0 ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Barrel_32GameCode.condition1IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( !(gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].isCurrentAnimationName("run")) ) {
        gdjs.Barrel_32GameCode.condition2IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}}
}
if (gdjs.Barrel_32GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Barrel_32GameCode.GDSuperArioObjects4 */
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].setAnimationName("run");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\running.ogg", 3000, false, 30, 1);
}}

}


{

gdjs.copyArray(gdjs.Barrel_32GameCode.GDSuperArioObjects3, gdjs.Barrel_32GameCode.GDSuperArioObjects4);


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").getCurrentSpeed() == 0 ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Barrel_32GameCode.condition1IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( !(gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].isCurrentAnimationName("idle")) ) {
        gdjs.Barrel_32GameCode.condition2IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}}
}
if (gdjs.Barrel_32GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Barrel_32GameCode.GDSuperArioObjects4 */
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].setAnimationName("idle");
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3000);
}}

}


{

gdjs.copyArray(gdjs.Barrel_32GameCode.GDSuperArioObjects3, gdjs.Barrel_32GameCode.GDSuperArioObjects4);


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition1IsTrue_0;
gdjs.Barrel_32GameCode.GDSuperArioObjects4_1final.length = 0;gdjs.Barrel_32GameCode.condition0IsTrue_1.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_1.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_1.val = false;
gdjs.Barrel_32GameCode.condition3IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.Barrel_32GameCode.GDSuperArioObjects4, gdjs.Barrel_32GameCode.GDSuperArioObjects5);

for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects5.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects5[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_1.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects5[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects5[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects5.length = k;if( gdjs.Barrel_32GameCode.condition0IsTrue_1.val ) {
    gdjs.Barrel_32GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Barrel_32GameCode.GDSuperArioObjects5.length;j<jLen;++j) {
        if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4_1final.indexOf(gdjs.Barrel_32GameCode.GDSuperArioObjects5[j]) === -1 )
            gdjs.Barrel_32GameCode.GDSuperArioObjects4_1final.push(gdjs.Barrel_32GameCode.GDSuperArioObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Barrel_32GameCode.GDSuperArioObjects4, gdjs.Barrel_32GameCode.GDSuperArioObjects5);

for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects5.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects5[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.Barrel_32GameCode.condition1IsTrue_1.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects5[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects5[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects5.length = k;if( gdjs.Barrel_32GameCode.condition1IsTrue_1.val ) {
    gdjs.Barrel_32GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Barrel_32GameCode.GDSuperArioObjects5.length;j<jLen;++j) {
        if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4_1final.indexOf(gdjs.Barrel_32GameCode.GDSuperArioObjects5[j]) === -1 )
            gdjs.Barrel_32GameCode.GDSuperArioObjects4_1final.push(gdjs.Barrel_32GameCode.GDSuperArioObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Barrel_32GameCode.GDSuperArioObjects4, gdjs.Barrel_32GameCode.GDSuperArioObjects5);

for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects5.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects5[i].getBehavior("PlatformerObject").isUsingControl("Up") ) {
        gdjs.Barrel_32GameCode.condition2IsTrue_1.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects5[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects5[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects5.length = k;if( gdjs.Barrel_32GameCode.condition2IsTrue_1.val ) {
    gdjs.Barrel_32GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Barrel_32GameCode.GDSuperArioObjects5.length;j<jLen;++j) {
        if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4_1final.indexOf(gdjs.Barrel_32GameCode.GDSuperArioObjects5[j]) === -1 )
            gdjs.Barrel_32GameCode.GDSuperArioObjects4_1final.push(gdjs.Barrel_32GameCode.GDSuperArioObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Barrel_32GameCode.GDSuperArioObjects4, gdjs.Barrel_32GameCode.GDSuperArioObjects5);

for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects5.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects5[i].getBehavior("PlatformerObject").isUsingControl("Down") ) {
        gdjs.Barrel_32GameCode.condition3IsTrue_1.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects5[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects5[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects5.length = k;if( gdjs.Barrel_32GameCode.condition3IsTrue_1.val ) {
    gdjs.Barrel_32GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Barrel_32GameCode.GDSuperArioObjects5.length;j<jLen;++j) {
        if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4_1final.indexOf(gdjs.Barrel_32GameCode.GDSuperArioObjects5[j]) === -1 )
            gdjs.Barrel_32GameCode.GDSuperArioObjects4_1final.push(gdjs.Barrel_32GameCode.GDSuperArioObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Barrel_32GameCode.GDSuperArioObjects4_1final, gdjs.Barrel_32GameCode.GDSuperArioObjects4);
}
}
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( !(gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].isCurrentAnimationName("run")) ) {
        gdjs.Barrel_32GameCode.condition2IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}}
}
if (gdjs.Barrel_32GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Barrel_32GameCode.GDSuperArioObjects4 */
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].setAnimationName("run");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\running.ogg", 3000, false, 30, 1);
}}

}


{

gdjs.copyArray(gdjs.Barrel_32GameCode.GDSuperArioObjects3, gdjs.Barrel_32GameCode.GDSuperArioObjects4);


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition3IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition4IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition5IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( !(gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").isUsingControl("Left")) ) {
        gdjs.Barrel_32GameCode.condition1IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( !(gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").isUsingControl("Right")) ) {
        gdjs.Barrel_32GameCode.condition2IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( !(gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").isUsingControl("Up")) ) {
        gdjs.Barrel_32GameCode.condition3IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( !(gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].getBehavior("PlatformerObject").isUsingControl("Down")) ) {
        gdjs.Barrel_32GameCode.condition4IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}if ( gdjs.Barrel_32GameCode.condition4IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length;i<l;++i) {
    if ( !(gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].isCurrentAnimationName("idle")) ) {
        gdjs.Barrel_32GameCode.condition5IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects4[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = k;}}
}
}
}
}
if (gdjs.Barrel_32GameCode.condition5IsTrue_0.val) {
/* Reuse gdjs.Barrel_32GameCode.GDSuperArioObjects4 */
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects4.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects4[i].setAnimationName("idle");
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3000);
}}

}


{

/* Reuse gdjs.Barrel_32GameCode.GDSuperArioObjects3 */

gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects3.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects3[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects3[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects3.length = k;}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition1IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12609628);
}
}}
if (gdjs.Barrel_32GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sound\\land on ground.wav", false, 40, 1);
}}

}


};gdjs.Barrel_32GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.Barrel_32GameCode.eventsList4(runtimeScene);
}


};gdjs.Barrel_32GameCode.eventsList6 = function(runtimeScene) {

};gdjs.Barrel_32GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SuperArio"), gdjs.Barrel_32GameCode.GDSuperArioObjects3);

gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects3.length;i<l;++i) {
    if ( !(gdjs.Barrel_32GameCode.GDSuperArioObjects3[i].isCurrentAnimationName("hurt fall")) ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects3[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects3[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects3.length = k;}if (gdjs.Barrel_32GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Barrel_32GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SuperArio"), gdjs.Barrel_32GameCode.GDSuperArioObjects3);

gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects3.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects3[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects3[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects3[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects3.length = k;}if (gdjs.Barrel_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("metalbar"), gdjs.Barrel_32GameCode.GDmetalbarObjects3);
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDmetalbarObjects3.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDmetalbarObjects3[i].getBehavior("Platform").changePlatformType("Jumpthru");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SuperArio"), gdjs.Barrel_32GameCode.GDSuperArioObjects3);

gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects3.length;i<l;++i) {
    if ( !(gdjs.Barrel_32GameCode.GDSuperArioObjects3[i].getBehavior("PlatformerObject").isOnLadder()) ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects3[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects3[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects3.length = k;}if (gdjs.Barrel_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("metalbar"), gdjs.Barrel_32GameCode.GDmetalbarObjects3);
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDmetalbarObjects3.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDmetalbarObjects3[i].getBehavior("Platform").changePlatformType("Platform");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("barrel"), gdjs.Barrel_32GameCode.GDbarrelObjects2);

for(gdjs.Barrel_32GameCode.forEachIndex3 = 0;gdjs.Barrel_32GameCode.forEachIndex3 < gdjs.Barrel_32GameCode.GDbarrelObjects2.length;++gdjs.Barrel_32GameCode.forEachIndex3) {
gdjs.Barrel_32GameCode.GDbarrelObjects3.length = 0;


gdjs.Barrel_32GameCode.forEachTemporary3 = gdjs.Barrel_32GameCode.GDbarrelObjects2[gdjs.Barrel_32GameCode.forEachIndex3];
gdjs.Barrel_32GameCode.GDbarrelObjects3.push(gdjs.Barrel_32GameCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarrelObjects3.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarrelObjects3[i].setAngle(gdjs.Barrel_32GameCode.GDbarrelObjects3[i].getAngle() + ((gdjs.Barrel_32GameCode.GDbarrelObjects3[i].getBehavior("Physics2").getLinearVelocityX()) * 3));
}
}}
}

}


};gdjs.Barrel_32GameCode.eventsList8 = function(runtimeScene) {

{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "new barrel") >= 2.8;
}if (gdjs.Barrel_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("gorilla"), gdjs.Barrel_32GameCode.GDgorillaObjects4);
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDgorillaObjects4.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDgorillaObjects4[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Voice Over\\Donkey King\\01 throw barrel.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gorilla"), gdjs.Barrel_32GameCode.GDgorillaObjects3);

gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDgorillaObjects3.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDgorillaObjects3[i].getAnimation() == 1 ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDgorillaObjects3[k] = gdjs.Barrel_32GameCode.GDgorillaObjects3[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDgorillaObjects3.length = k;}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDgorillaObjects3.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDgorillaObjects3[i].hasAnimationEnded() ) {
        gdjs.Barrel_32GameCode.condition1IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDgorillaObjects3[k] = gdjs.Barrel_32GameCode.GDgorillaObjects3[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDgorillaObjects3.length = k;}}
if (gdjs.Barrel_32GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Barrel_32GameCode.GDgorillaObjects3 */
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDgorillaObjects3.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDgorillaObjects3[i].setAnimation(0);
}
}}

}


};gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDbarrelObjects2Objects = Hashtable.newFrom({"barrel": gdjs.Barrel_32GameCode.GDbarrelObjects2});
gdjs.Barrel_32GameCode.eventsList9 = function(runtimeScene) {

{


gdjs.Barrel_32GameCode.eventsList8(runtimeScene);
}


{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "new barrel") >= 3;
}if (gdjs.Barrel_32GameCode.condition0IsTrue_0.val) {
gdjs.Barrel_32GameCode.GDbarrelObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "new barrel");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDbarrelObjects2Objects, 250, 15, "");
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarrelObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarrelObjects2[i].setSize(26, 26);
}
}}

}


};gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDbarrelObjects4Objects = Hashtable.newFrom({"barrel": gdjs.Barrel_32GameCode.GDbarrelObjects4});
gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDmetalbarObjects4Objects = Hashtable.newFrom({"metalbar": gdjs.Barrel_32GameCode.GDmetalbarObjects4});
gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDbarrelObjects4Objects = Hashtable.newFrom({"barrel": gdjs.Barrel_32GameCode.GDbarrelObjects4});
gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDmetalbarObjects4Objects = Hashtable.newFrom({"metalbar": gdjs.Barrel_32GameCode.GDmetalbarObjects4});
gdjs.Barrel_32GameCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Barrel_32GameCode.GDbarrelObjects3, gdjs.Barrel_32GameCode.GDbarrelObjects4);

gdjs.copyArray(runtimeScene.getObjects("metalbar"), gdjs.Barrel_32GameCode.GDmetalbarObjects4);

gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDbarrelObjects4Objects, "Physics2", gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDmetalbarObjects4Objects, false);
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDbarrelObjects4.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDbarrelObjects4[i].getVariableBoolean(gdjs.Barrel_32GameCode.GDbarrelObjects4[i].getVariables().getFromIndex(0), false) ) {
        gdjs.Barrel_32GameCode.condition1IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDbarrelObjects4[k] = gdjs.Barrel_32GameCode.GDbarrelObjects4[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDbarrelObjects4.length = k;}}
if (gdjs.Barrel_32GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Barrel_32GameCode.GDbarrelObjects4 */
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarrelObjects4.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarrelObjects4[i].setVariableBoolean(gdjs.Barrel_32GameCode.GDbarrelObjects4[i].getVariables().getFromIndex(0), true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound\\barrel lands.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(gdjs.Barrel_32GameCode.GDbarrelObjects3, gdjs.Barrel_32GameCode.GDbarrelObjects4);

gdjs.copyArray(runtimeScene.getObjects("metalbar"), gdjs.Barrel_32GameCode.GDmetalbarObjects4);

gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDbarrelObjects4Objects, "Physics2", gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDmetalbarObjects4Objects, true);
}if (gdjs.Barrel_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Barrel_32GameCode.GDbarrelObjects4 */
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarrelObjects4.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarrelObjects4[i].setVariableBoolean(gdjs.Barrel_32GameCode.GDbarrelObjects4[i].getVariables().getFromIndex(0), false);
}
}}

}


};gdjs.Barrel_32GameCode.eventsList11 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("barrel"), gdjs.Barrel_32GameCode.GDbarrelObjects2);

for(gdjs.Barrel_32GameCode.forEachIndex3 = 0;gdjs.Barrel_32GameCode.forEachIndex3 < gdjs.Barrel_32GameCode.GDbarrelObjects2.length;++gdjs.Barrel_32GameCode.forEachIndex3) {
gdjs.Barrel_32GameCode.GDbarrelObjects3.length = 0;


gdjs.Barrel_32GameCode.forEachTemporary3 = gdjs.Barrel_32GameCode.GDbarrelObjects2[gdjs.Barrel_32GameCode.forEachIndex3];
gdjs.Barrel_32GameCode.GDbarrelObjects3.push(gdjs.Barrel_32GameCode.forEachTemporary3);
if (true) {

{ //Subevents: 
gdjs.Barrel_32GameCode.eventsList10(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDSuperArioObjects2Objects = Hashtable.newFrom({"SuperArio": gdjs.Barrel_32GameCode.GDSuperArioObjects2});
gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDbarrelObjects2Objects = Hashtable.newFrom({"barrel": gdjs.Barrel_32GameCode.GDbarrelObjects2});
gdjs.Barrel_32GameCode.asyncCallback11020436 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("SuperArio"), gdjs.Barrel_32GameCode.GDSuperArioObjects2);

{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].setVariableBoolean(gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].getVariables().getFromIndex(0), false);
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].setAnimationName("idle");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound\\Ario respawns.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].setPosition(300,600);
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(false);
}
}}
gdjs.Barrel_32GameCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Barrel_32GameCode.GDSuperArioObjects1) asyncObjectsList.addObject("SuperArio", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Barrel_32GameCode.asyncCallback11020436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Barrel_32GameCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SuperArio"), gdjs.Barrel_32GameCode.GDSuperArioObjects2);
gdjs.copyArray(runtimeScene.getObjects("barrel"), gdjs.Barrel_32GameCode.GDbarrelObjects2);

gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDSuperArioObjects2Objects, gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDbarrelObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects2.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].getVariableBoolean(gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.Barrel_32GameCode.condition1IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects2[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects2[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects2.length = k;}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition2IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14478604);
}
}}
}
if (gdjs.Barrel_32GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Barrel_32GameCode.GDSuperArioObjects2 */
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].setVariableBoolean(gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].setAnimationName("hurt fall");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\Super Ario\\201 Oouuuh -get killed by barrel.ogg", 10, false, 100, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\hit by barrel.wav", 11, false, 100, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\body fall.wav", 12, false, 100, 1);
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SuperArio"), gdjs.Barrel_32GameCode.GDSuperArioObjects1);

gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects1.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects1[i].getVariableBoolean(gdjs.Barrel_32GameCode.GDSuperArioObjects1[i].getVariables().getFromIndex(0), true) ) {
        gdjs.Barrel_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects1[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects1[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects1.length = k;}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 10));
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition2IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12607812);
}
}}
}
if (gdjs.Barrel_32GameCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.Barrel_32GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Barrel_32GameCode.eventsList14 = function(runtimeScene) {

{


gdjs.Barrel_32GameCode.eventsList7(runtimeScene);
}


{


gdjs.Barrel_32GameCode.eventsList9(runtimeScene);
}


{


gdjs.Barrel_32GameCode.eventsList11(runtimeScene);
}


{


gdjs.Barrel_32GameCode.eventsList13(runtimeScene);
}


};gdjs.Barrel_32GameCode.eventsList15 = function(runtimeScene) {

{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "game";
}if (gdjs.Barrel_32GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Barrel_32GameCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDSuperArioObjects2Objects = Hashtable.newFrom({"SuperArio": gdjs.Barrel_32GameCode.GDSuperArioObjects2});
gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDcollidereachdonkeyObjects2Objects = Hashtable.newFrom({"collidereachdonkey": gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects2});
gdjs.Barrel_32GameCode.asyncCallback7987796 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Epilogue", false);
}}
gdjs.Barrel_32GameCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Barrel_32GameCode.asyncCallback7987796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Barrel_32GameCode.eventsList17 = function(runtimeScene) {

{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition2IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7989220);
}
}}
}
if (gdjs.Barrel_32GameCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("gorilla"), gdjs.Barrel_32GameCode.GDgorillaObjects2);
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\Donkey King\\02 sad.ogg", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDgorillaObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDgorillaObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition2IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11292604);
}
}}
}
if (gdjs.Barrel_32GameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\princess beach\\awww.ogg", 1, false, 100, 1);
}}

}


{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition2IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7863068);
}
}}
}
if (gdjs.Barrel_32GameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}
{ //Subevents
gdjs.Barrel_32GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.Barrel_32GameCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SuperArio"), gdjs.Barrel_32GameCode.GDSuperArioObjects2);
gdjs.copyArray(runtimeScene.getObjects("collidereachdonkey"), gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects2);

gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition2IsTrue_0.val = false;
gdjs.Barrel_32GameCode.condition3IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDSuperArioObjects2Objects, gdjs.Barrel_32GameCode.mapOfGDgdjs_46Barrel_9532GameCode_46GDcollidereachdonkeyObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Barrel_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Barrel_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "game";
}if ( gdjs.Barrel_32GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Barrel_32GameCode.GDSuperArioObjects2.length;i<l;++i) {
    if ( gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Barrel_32GameCode.condition2IsTrue_0.val = true;
        gdjs.Barrel_32GameCode.GDSuperArioObjects2[k] = gdjs.Barrel_32GameCode.GDSuperArioObjects2[i];
        ++k;
    }
}
gdjs.Barrel_32GameCode.GDSuperArioObjects2.length = k;}if ( gdjs.Barrel_32GameCode.condition2IsTrue_0.val ) {
{
{gdjs.Barrel_32GameCode.conditionTrue_1 = gdjs.Barrel_32GameCode.condition3IsTrue_0;
gdjs.Barrel_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9989500);
}
}}
}
}
if (gdjs.Barrel_32GameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.Barrel_32GameCode.GDSuperArioObjects2 */
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects2.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setString("outro");
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1000);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\finish barrel level.wav", 234523452345, false, 30, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\Super Ario\\10 it's over donkey king hand her over.ogg", 1, false, 100, 1);
}}

}


{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "outro";
}if (gdjs.Barrel_32GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Barrel_32GameCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.Barrel_32GameCode.eventsList19 = function(runtimeScene) {

{


gdjs.Barrel_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Barrel_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Barrel_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SuperArio"), gdjs.Barrel_32GameCode.GDSuperArioObjects1);
gdjs.copyArray(runtimeScene.getObjects("barrel"), gdjs.Barrel_32GameCode.GDbarrelObjects1);
gdjs.copyArray(runtimeScene.getObjects("barreldecor"), gdjs.Barrel_32GameCode.GDbarreldecorObjects1);
gdjs.copyArray(runtimeScene.getObjects("collidereachdonkey"), gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("engineerboard"), gdjs.Barrel_32GameCode.GDengineerboardObjects1);
{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects1.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects1[i].activateBehavior("SmoothCamera", false);
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects1.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects1[i].activateBehavior("SmoothPlatformerCamera", false);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "", 0);
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects1.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarrelObjects1.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarrelObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarreldecorObjects1.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarreldecorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDengineerboardObjects1.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDengineerboardObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarrelObjects1.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarrelObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarrelObjects1.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarrelObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDbarreldecorObjects1.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDbarreldecorObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\GG\\33 and build a contraption.ogg", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.Barrel_32GameCode.GDSuperArioObjects1.length ;i < len;++i) {
    gdjs.Barrel_32GameCode.GDSuperArioObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\6 Barrel Introduction Music.wav", 600, true, 24, 1);
}}

}


{


gdjs.Barrel_32GameCode.eventsList3(runtimeScene);
}


{


gdjs.Barrel_32GameCode.eventsList15(runtimeScene);
}


{


gdjs.Barrel_32GameCode.eventsList18(runtimeScene);
}


};

gdjs.Barrel_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Barrel_32GameCode.GDSuperArioObjects1.length = 0;
gdjs.Barrel_32GameCode.GDSuperArioObjects2.length = 0;
gdjs.Barrel_32GameCode.GDSuperArioObjects3.length = 0;
gdjs.Barrel_32GameCode.GDSuperArioObjects4.length = 0;
gdjs.Barrel_32GameCode.GDSuperArioObjects5.length = 0;
gdjs.Barrel_32GameCode.GDwideblockObjects1.length = 0;
gdjs.Barrel_32GameCode.GDwideblockObjects2.length = 0;
gdjs.Barrel_32GameCode.GDwideblockObjects3.length = 0;
gdjs.Barrel_32GameCode.GDwideblockObjects4.length = 0;
gdjs.Barrel_32GameCode.GDwideblockObjects5.length = 0;
gdjs.Barrel_32GameCode.GDgorillaObjects1.length = 0;
gdjs.Barrel_32GameCode.GDgorillaObjects2.length = 0;
gdjs.Barrel_32GameCode.GDgorillaObjects3.length = 0;
gdjs.Barrel_32GameCode.GDgorillaObjects4.length = 0;
gdjs.Barrel_32GameCode.GDgorillaObjects5.length = 0;
gdjs.Barrel_32GameCode.GDmetalbarObjects1.length = 0;
gdjs.Barrel_32GameCode.GDmetalbarObjects2.length = 0;
gdjs.Barrel_32GameCode.GDmetalbarObjects3.length = 0;
gdjs.Barrel_32GameCode.GDmetalbarObjects4.length = 0;
gdjs.Barrel_32GameCode.GDmetalbarObjects5.length = 0;
gdjs.Barrel_32GameCode.GDladderObjects1.length = 0;
gdjs.Barrel_32GameCode.GDladderObjects2.length = 0;
gdjs.Barrel_32GameCode.GDladderObjects3.length = 0;
gdjs.Barrel_32GameCode.GDladderObjects4.length = 0;
gdjs.Barrel_32GameCode.GDladderObjects5.length = 0;
gdjs.Barrel_32GameCode.GDbarrelObjects1.length = 0;
gdjs.Barrel_32GameCode.GDbarrelObjects2.length = 0;
gdjs.Barrel_32GameCode.GDbarrelObjects3.length = 0;
gdjs.Barrel_32GameCode.GDbarrelObjects4.length = 0;
gdjs.Barrel_32GameCode.GDbarrelObjects5.length = 0;
gdjs.Barrel_32GameCode.GDbarreldecorObjects1.length = 0;
gdjs.Barrel_32GameCode.GDbarreldecorObjects2.length = 0;
gdjs.Barrel_32GameCode.GDbarreldecorObjects3.length = 0;
gdjs.Barrel_32GameCode.GDbarreldecorObjects4.length = 0;
gdjs.Barrel_32GameCode.GDbarreldecorObjects5.length = 0;
gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects1.length = 0;
gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects2.length = 0;
gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects3.length = 0;
gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects4.length = 0;
gdjs.Barrel_32GameCode.GDcollidereachdonkeyObjects5.length = 0;
gdjs.Barrel_32GameCode.GDPrincessBeachObjects1.length = 0;
gdjs.Barrel_32GameCode.GDPrincessBeachObjects2.length = 0;
gdjs.Barrel_32GameCode.GDPrincessBeachObjects3.length = 0;
gdjs.Barrel_32GameCode.GDPrincessBeachObjects4.length = 0;
gdjs.Barrel_32GameCode.GDPrincessBeachObjects5.length = 0;
gdjs.Barrel_32GameCode.GDbackparryObjects1.length = 0;
gdjs.Barrel_32GameCode.GDbackparryObjects2.length = 0;
gdjs.Barrel_32GameCode.GDbackparryObjects3.length = 0;
gdjs.Barrel_32GameCode.GDbackparryObjects4.length = 0;
gdjs.Barrel_32GameCode.GDbackparryObjects5.length = 0;
gdjs.Barrel_32GameCode.GDparryhotterObjects1.length = 0;
gdjs.Barrel_32GameCode.GDparryhotterObjects2.length = 0;
gdjs.Barrel_32GameCode.GDparryhotterObjects3.length = 0;
gdjs.Barrel_32GameCode.GDparryhotterObjects4.length = 0;
gdjs.Barrel_32GameCode.GDparryhotterObjects5.length = 0;
gdjs.Barrel_32GameCode.GDengineerboardObjects1.length = 0;
gdjs.Barrel_32GameCode.GDengineerboardObjects2.length = 0;
gdjs.Barrel_32GameCode.GDengineerboardObjects3.length = 0;
gdjs.Barrel_32GameCode.GDengineerboardObjects4.length = 0;
gdjs.Barrel_32GameCode.GDengineerboardObjects5.length = 0;

gdjs.Barrel_32GameCode.eventsList19(runtimeScene);
return;

}

gdjs['Barrel_32GameCode'] = gdjs.Barrel_32GameCode;
