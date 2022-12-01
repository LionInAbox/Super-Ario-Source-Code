gdjs.EpilogueCode = {};
gdjs.EpilogueCode.GDGGObjects1= [];
gdjs.EpilogueCode.GDGGObjects2= [];
gdjs.EpilogueCode.GDGGObjects3= [];
gdjs.EpilogueCode.GDGGeyesObjects1= [];
gdjs.EpilogueCode.GDGGeyesObjects2= [];
gdjs.EpilogueCode.GDGGeyesObjects3= [];
gdjs.EpilogueCode.GDReplayObjects1= [];
gdjs.EpilogueCode.GDReplayObjects2= [];
gdjs.EpilogueCode.GDReplayObjects3= [];
gdjs.EpilogueCode.GDDestroyGGObjects1= [];
gdjs.EpilogueCode.GDDestroyGGObjects2= [];
gdjs.EpilogueCode.GDDestroyGGObjects3= [];

gdjs.EpilogueCode.conditionTrue_0 = {val:false};
gdjs.EpilogueCode.condition0IsTrue_0 = {val:false};
gdjs.EpilogueCode.condition1IsTrue_0 = {val:false};


gdjs.EpilogueCode.mapOfGDgdjs_46EpilogueCode_46GDReplayObjects1Objects = Hashtable.newFrom({"Replay": gdjs.EpilogueCode.GDReplayObjects1});
gdjs.EpilogueCode.eventsList0 = function(runtimeScene) {

{


gdjs.EpilogueCode.condition0IsTrue_0.val = false;
{
gdjs.EpilogueCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.EpilogueCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.EpilogueCode.GDReplayObjects1, gdjs.EpilogueCode.GDReplayObjects2);

{for(var i = 0, len = gdjs.EpilogueCode.GDReplayObjects2.length ;i < len;++i) {
    gdjs.EpilogueCode.GDReplayObjects2[i].enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs.EpilogueCode.GDReplayObjects2.length ;i < len;++i) {
    gdjs.EpilogueCode.GDReplayObjects2[i].setOpacity(255);
}
}}

}


{


gdjs.EpilogueCode.condition0IsTrue_0.val = false;
{
gdjs.EpilogueCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.EpilogueCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.EpilogueCode.GDReplayObjects1, gdjs.EpilogueCode.GDReplayObjects2);

{for(var i = 0, len = gdjs.EpilogueCode.GDReplayObjects2.length ;i < len;++i) {
    gdjs.EpilogueCode.GDReplayObjects2[i].setOpacity(100);
}
}}

}


{


gdjs.EpilogueCode.condition0IsTrue_0.val = false;
{
gdjs.EpilogueCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.EpilogueCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Platformer Game", false);
}}

}


};gdjs.EpilogueCode.mapOfGDgdjs_46EpilogueCode_46GDReplayObjects1Objects = Hashtable.newFrom({"Replay": gdjs.EpilogueCode.GDReplayObjects1});
gdjs.EpilogueCode.mapOfGDgdjs_46EpilogueCode_46GDDestroyGGObjects1Objects = Hashtable.newFrom({"DestroyGG": gdjs.EpilogueCode.GDDestroyGGObjects1});
gdjs.EpilogueCode.eventsList1 = function(runtimeScene) {

{


gdjs.EpilogueCode.condition0IsTrue_0.val = false;
{
gdjs.EpilogueCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.EpilogueCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.EpilogueCode.GDDestroyGGObjects1, gdjs.EpilogueCode.GDDestroyGGObjects2);

{for(var i = 0, len = gdjs.EpilogueCode.GDDestroyGGObjects2.length ;i < len;++i) {
    gdjs.EpilogueCode.GDDestroyGGObjects2[i].enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs.EpilogueCode.GDDestroyGGObjects2.length ;i < len;++i) {
    gdjs.EpilogueCode.GDDestroyGGObjects2[i].setOpacity(255);
}
}}

}


{


gdjs.EpilogueCode.condition0IsTrue_0.val = false;
{
gdjs.EpilogueCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.EpilogueCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.EpilogueCode.GDDestroyGGObjects1, gdjs.EpilogueCode.GDDestroyGGObjects2);

{for(var i = 0, len = gdjs.EpilogueCode.GDDestroyGGObjects2.length ;i < len;++i) {
    gdjs.EpilogueCode.GDDestroyGGObjects2[i].setOpacity(100);
}
}}

}


{


gdjs.EpilogueCode.condition0IsTrue_0.val = false;
{
gdjs.EpilogueCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.EpilogueCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


};gdjs.EpilogueCode.mapOfGDgdjs_46EpilogueCode_46GDDestroyGGObjects1Objects = Hashtable.newFrom({"DestroyGG": gdjs.EpilogueCode.GDDestroyGGObjects1});
gdjs.EpilogueCode.eventsList2 = function(runtimeScene) {

{


gdjs.EpilogueCode.condition0IsTrue_0.val = false;
{
gdjs.EpilogueCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EpilogueCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DestroyGG"), gdjs.EpilogueCode.GDDestroyGGObjects1);
gdjs.copyArray(runtimeScene.getObjects("GG"), gdjs.EpilogueCode.GDGGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Replay"), gdjs.EpilogueCode.GDReplayObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Music\\5 Super Ario GG End Speech.wav", 1000, true, 15, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Voice Over\\GG\\42 end speech.ogg", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.EpilogueCode.GDGGObjects1.length ;i < len;++i) {
    gdjs.EpilogueCode.GDGGObjects1[i].setAnimationName("speak");
}
}{for(var i = 0, len = gdjs.EpilogueCode.GDReplayObjects1.length ;i < len;++i) {
    gdjs.EpilogueCode.GDReplayObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EpilogueCode.GDDestroyGGObjects1.length ;i < len;++i) {
    gdjs.EpilogueCode.GDDestroyGGObjects1[i].hide();
}
}}

}


{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) - 0.0001, "", 0);
}}

}


{


gdjs.EpilogueCode.condition0IsTrue_0.val = false;
{
gdjs.EpilogueCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if (gdjs.EpilogueCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DestroyGG"), gdjs.EpilogueCode.GDDestroyGGObjects1);
gdjs.copyArray(runtimeScene.getObjects("GG"), gdjs.EpilogueCode.GDGGObjects1);
gdjs.copyArray(runtimeScene.getObjects("GGeyes"), gdjs.EpilogueCode.GDGGeyesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Replay"), gdjs.EpilogueCode.GDReplayObjects1);
{for(var i = 0, len = gdjs.EpilogueCode.GDGGObjects1.length ;i < len;++i) {
    gdjs.EpilogueCode.GDGGObjects1[i].setAnimationName("smile");
}
}{for(var i = 0, len = gdjs.EpilogueCode.GDGGeyesObjects1.length ;i < len;++i) {
    gdjs.EpilogueCode.GDGGeyesObjects1[i].setAnimationName("slim");
}
}{for(var i = 0, len = gdjs.EpilogueCode.GDReplayObjects1.length ;i < len;++i) {
    gdjs.EpilogueCode.GDReplayObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.EpilogueCode.GDDestroyGGObjects1.length ;i < len;++i) {
    gdjs.EpilogueCode.GDDestroyGGObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Replay"), gdjs.EpilogueCode.GDReplayObjects1);

gdjs.EpilogueCode.condition0IsTrue_0.val = false;
{
gdjs.EpilogueCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EpilogueCode.mapOfGDgdjs_46EpilogueCode_46GDReplayObjects1Objects, runtimeScene, true, false);
}if (gdjs.EpilogueCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EpilogueCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Replay"), gdjs.EpilogueCode.GDReplayObjects1);

gdjs.EpilogueCode.condition0IsTrue_0.val = false;
{
gdjs.EpilogueCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EpilogueCode.mapOfGDgdjs_46EpilogueCode_46GDReplayObjects1Objects, runtimeScene, true, true);
}if (gdjs.EpilogueCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EpilogueCode.GDReplayObjects1 */
{for(var i = 0, len = gdjs.EpilogueCode.GDReplayObjects1.length ;i < len;++i) {
    gdjs.EpilogueCode.GDReplayObjects1[i].enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.EpilogueCode.GDReplayObjects1.length ;i < len;++i) {
    gdjs.EpilogueCode.GDReplayObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DestroyGG"), gdjs.EpilogueCode.GDDestroyGGObjects1);

gdjs.EpilogueCode.condition0IsTrue_0.val = false;
{
gdjs.EpilogueCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EpilogueCode.mapOfGDgdjs_46EpilogueCode_46GDDestroyGGObjects1Objects, runtimeScene, true, false);
}if (gdjs.EpilogueCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EpilogueCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DestroyGG"), gdjs.EpilogueCode.GDDestroyGGObjects1);

gdjs.EpilogueCode.condition0IsTrue_0.val = false;
{
gdjs.EpilogueCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EpilogueCode.mapOfGDgdjs_46EpilogueCode_46GDDestroyGGObjects1Objects, runtimeScene, true, true);
}if (gdjs.EpilogueCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EpilogueCode.GDDestroyGGObjects1 */
{for(var i = 0, len = gdjs.EpilogueCode.GDDestroyGGObjects1.length ;i < len;++i) {
    gdjs.EpilogueCode.GDDestroyGGObjects1[i].enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.EpilogueCode.GDDestroyGGObjects1.length ;i < len;++i) {
    gdjs.EpilogueCode.GDDestroyGGObjects1[i].setOpacity(255);
}
}}

}


};

gdjs.EpilogueCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EpilogueCode.GDGGObjects1.length = 0;
gdjs.EpilogueCode.GDGGObjects2.length = 0;
gdjs.EpilogueCode.GDGGObjects3.length = 0;
gdjs.EpilogueCode.GDGGeyesObjects1.length = 0;
gdjs.EpilogueCode.GDGGeyesObjects2.length = 0;
gdjs.EpilogueCode.GDGGeyesObjects3.length = 0;
gdjs.EpilogueCode.GDReplayObjects1.length = 0;
gdjs.EpilogueCode.GDReplayObjects2.length = 0;
gdjs.EpilogueCode.GDReplayObjects3.length = 0;
gdjs.EpilogueCode.GDDestroyGGObjects1.length = 0;
gdjs.EpilogueCode.GDDestroyGGObjects2.length = 0;
gdjs.EpilogueCode.GDDestroyGGObjects3.length = 0;

gdjs.EpilogueCode.eventsList2(runtimeScene);
return;

}

gdjs['EpilogueCode'] = gdjs.EpilogueCode;
