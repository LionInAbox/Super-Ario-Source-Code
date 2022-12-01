gdjs.DeathCode = {};
gdjs.DeathCode.GDNewVideoObjects1= [];
gdjs.DeathCode.GDNewVideoObjects2= [];

gdjs.DeathCode.conditionTrue_0 = {val:false};
gdjs.DeathCode.condition0IsTrue_0 = {val:false};
gdjs.DeathCode.condition1IsTrue_0 = {val:false};
gdjs.DeathCode.condition2IsTrue_0 = {val:false};
gdjs.DeathCode.conditionTrue_1 = {val:false};
gdjs.DeathCode.condition0IsTrue_1 = {val:false};
gdjs.DeathCode.condition1IsTrue_1 = {val:false};
gdjs.DeathCode.condition2IsTrue_1 = {val:false};


gdjs.DeathCode.eventsList0 = function(runtimeScene) {

{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.DeathCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.DeathCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.DeathCode.GDNewVideoObjects1);

gdjs.DeathCode.condition0IsTrue_0.val = false;
gdjs.DeathCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.DeathCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.DeathCode.GDNewVideoObjects1[i].getCurrentTime() > (gdjs.DeathCode.GDNewVideoObjects1[i].getDuration()) - 0.5 ) {
        gdjs.DeathCode.condition0IsTrue_0.val = true;
        gdjs.DeathCode.GDNewVideoObjects1[k] = gdjs.DeathCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.DeathCode.GDNewVideoObjects1.length = k;}if ( gdjs.DeathCode.condition0IsTrue_0.val ) {
{
{gdjs.DeathCode.conditionTrue_1 = gdjs.DeathCode.condition1IsTrue_0;
gdjs.DeathCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12680740);
}
}}
if (gdjs.DeathCode.condition1IsTrue_0.val) {
/* Reuse gdjs.DeathCode.GDNewVideoObjects1 */
{for(var i = 0, len = gdjs.DeathCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDNewVideoObjects1[i].getBehavior("Tween").addObjectOpacityTween("dissapear", 0, "easeInOutQuad", 10, true);
}
}}

}


};

gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDNewVideoObjects1.length = 0;
gdjs.DeathCode.GDNewVideoObjects2.length = 0;

gdjs.DeathCode.eventsList0(runtimeScene);
return;

}

gdjs['DeathCode'] = gdjs.DeathCode;
