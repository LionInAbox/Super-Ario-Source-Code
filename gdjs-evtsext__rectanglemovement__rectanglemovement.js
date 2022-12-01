
gdjs.evtsExt__RectangleMovement__RectangleMovement = gdjs.evtsExt__RectangleMovement__RectangleMovement || {};

/**
 * Behavior generated from Rectangular movement
 */
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement = class RectangleMovement extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.Width = behaviorData.Width !== undefined ? behaviorData.Width : Number("100") || 0;
    this._behaviorData.Height = behaviorData.Height !== undefined ? behaviorData.Height : Number("100") || 0;
    this._behaviorData.Clockwise = behaviorData.Clockwise !== undefined ? behaviorData.Clockwise : true;
    this._behaviorData.HorizontalEdgeDuration = behaviorData.HorizontalEdgeDuration !== undefined ? behaviorData.HorizontalEdgeDuration : Number("4") || 0;
    this._behaviorData.VerticalEdgeDuration = behaviorData.VerticalEdgeDuration !== undefined ? behaviorData.VerticalEdgeDuration : Number("1") || 0;
    this._behaviorData.Left = Number("") || 0;
    this._behaviorData.Top = Number("") || 0;
    this._behaviorData.Progress = Number("") || 0;
    this._behaviorData.OldX = Number("") || 0;
    this._behaviorData.OldY = Number("") || 0;
    this._behaviorData.Easing = behaviorData.Easing !== undefined ? behaviorData.Easing : "easeInOutSine";
    this._behaviorData.InitialPosition = behaviorData.InitialPosition !== undefined ? behaviorData.InitialPosition : "Top-left corner";
    this._behaviorData.ToogleClockwise = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Width !== newBehaviorData.Width)
      this._behaviorData.Width = newBehaviorData.Width;
    if (oldBehaviorData.Height !== newBehaviorData.Height)
      this._behaviorData.Height = newBehaviorData.Height;
    if (oldBehaviorData.Clockwise !== newBehaviorData.Clockwise)
      this._behaviorData.Clockwise = newBehaviorData.Clockwise;
    if (oldBehaviorData.HorizontalEdgeDuration !== newBehaviorData.HorizontalEdgeDuration)
      this._behaviorData.HorizontalEdgeDuration = newBehaviorData.HorizontalEdgeDuration;
    if (oldBehaviorData.VerticalEdgeDuration !== newBehaviorData.VerticalEdgeDuration)
      this._behaviorData.VerticalEdgeDuration = newBehaviorData.VerticalEdgeDuration;
    if (oldBehaviorData.Left !== newBehaviorData.Left)
      this._behaviorData.Left = newBehaviorData.Left;
    if (oldBehaviorData.Top !== newBehaviorData.Top)
      this._behaviorData.Top = newBehaviorData.Top;
    if (oldBehaviorData.Progress !== newBehaviorData.Progress)
      this._behaviorData.Progress = newBehaviorData.Progress;
    if (oldBehaviorData.OldX !== newBehaviorData.OldX)
      this._behaviorData.OldX = newBehaviorData.OldX;
    if (oldBehaviorData.OldY !== newBehaviorData.OldY)
      this._behaviorData.OldY = newBehaviorData.OldY;
    if (oldBehaviorData.Easing !== newBehaviorData.Easing)
      this._behaviorData.Easing = newBehaviorData.Easing;
    if (oldBehaviorData.InitialPosition !== newBehaviorData.InitialPosition)
      this._behaviorData.InitialPosition = newBehaviorData.InitialPosition;
    if (oldBehaviorData.ToogleClockwise !== newBehaviorData.ToogleClockwise)
      this._behaviorData.ToogleClockwise = newBehaviorData.ToogleClockwise;

    return true;
  }

  // Properties:
  
  _getWidth() {
    return this._behaviorData.Width !== undefined ? this._behaviorData.Width : Number("100") || 0;
  }
  _setWidth(newValue) {
    this._behaviorData.Width = newValue;
  }
  _getHeight() {
    return this._behaviorData.Height !== undefined ? this._behaviorData.Height : Number("100") || 0;
  }
  _setHeight(newValue) {
    this._behaviorData.Height = newValue;
  }
  _getClockwise() {
    return this._behaviorData.Clockwise !== undefined ? this._behaviorData.Clockwise : true;
  }
  _setClockwise(newValue) {
    this._behaviorData.Clockwise = newValue;
  }
  _getHorizontalEdgeDuration() {
    return this._behaviorData.HorizontalEdgeDuration !== undefined ? this._behaviorData.HorizontalEdgeDuration : Number("4") || 0;
  }
  _setHorizontalEdgeDuration(newValue) {
    this._behaviorData.HorizontalEdgeDuration = newValue;
  }
  _getVerticalEdgeDuration() {
    return this._behaviorData.VerticalEdgeDuration !== undefined ? this._behaviorData.VerticalEdgeDuration : Number("1") || 0;
  }
  _setVerticalEdgeDuration(newValue) {
    this._behaviorData.VerticalEdgeDuration = newValue;
  }
  _getLeft() {
    return this._behaviorData.Left !== undefined ? this._behaviorData.Left : Number("") || 0;
  }
  _setLeft(newValue) {
    this._behaviorData.Left = newValue;
  }
  _getTop() {
    return this._behaviorData.Top !== undefined ? this._behaviorData.Top : Number("") || 0;
  }
  _setTop(newValue) {
    this._behaviorData.Top = newValue;
  }
  _getProgress() {
    return this._behaviorData.Progress !== undefined ? this._behaviorData.Progress : Number("") || 0;
  }
  _setProgress(newValue) {
    this._behaviorData.Progress = newValue;
  }
  _getOldX() {
    return this._behaviorData.OldX !== undefined ? this._behaviorData.OldX : Number("") || 0;
  }
  _setOldX(newValue) {
    this._behaviorData.OldX = newValue;
  }
  _getOldY() {
    return this._behaviorData.OldY !== undefined ? this._behaviorData.OldY : Number("") || 0;
  }
  _setOldY(newValue) {
    this._behaviorData.OldY = newValue;
  }
  _getEasing() {
    return this._behaviorData.Easing !== undefined ? this._behaviorData.Easing : "easeInOutSine";
  }
  _setEasing(newValue) {
    this._behaviorData.Easing = newValue;
  }
  _getInitialPosition() {
    return this._behaviorData.InitialPosition !== undefined ? this._behaviorData.InitialPosition : "Top-left corner";
  }
  _setInitialPosition(newValue) {
    this._behaviorData.InitialPosition = newValue;
  }
  _getToogleClockwise() {
    return this._behaviorData.ToogleClockwise !== undefined ? this._behaviorData.ToogleClockwise : false;
  }
  _setToogleClockwise(newValue) {
    this._behaviorData.ToogleClockwise = newValue;
  }
}

// Methods:
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldX((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getX()));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldY((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getY()));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialPosition() == "Top-right corner" ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TopRightDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Perimeter((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialPosition() == "Bottom-right corner" ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BottomRightDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Perimeter((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialPosition() == "Bottom-left corner" ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BottomLeftDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Perimeter((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getX()) - (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTop((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getY()) - (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft(gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft() + ((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()) - (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldX())));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTop(gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTop() + ((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY()) - (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldY())));
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setPosition((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft()) + (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))),(gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTop()) + (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldX((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldY((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY()));
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClockwise() ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress(gdjs.evtTools.common.mod((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress()) + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LoopDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 1));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClockwise()) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress(gdjs.evtTools.common.mod((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress()) - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LoopDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 1));
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Corner") : "") == "Top-left corner");
}
}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress(0);
}
}}

}


{


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Corner") : "") == "Top-right corner");
}
}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TopRightDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LoopDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Corner") : "") == "Bottom-right corner");
}
}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BottomRightDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LoopDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Corner") : "") == "Bottom-left corner");
}
}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BottomLeftDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LoopDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCorner = function(Corner, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Corner") return Corner;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TeleportToCornerContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 2 * (Math.abs((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth())) + Math.abs((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight()))); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.Perimeter = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.PerimeterContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 2 * ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalEdgeDuration()) + (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalEdgeDuration())); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDuration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LoopDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDurationContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDurationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalEdgeDuration()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDuration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HorizontalEdgeDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDurationContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDurationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalEdgeDuration()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDuration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.VerticalEdgeDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.WidthContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.WidthContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.WidthContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.WidthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.WidthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.WidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.WidthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.WidthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.WidthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.Width = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.WidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.WidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.WidthContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HeightContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HeightContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HeightContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HeightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HeightContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HeightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HeightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HeightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.Height = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HeightContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LeftContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LeftContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LeftContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LeftContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LeftContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LeftContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.Left = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.LeftContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTop()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.Top = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft()) + (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.Right = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.RightContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTop()) + (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.Bottom = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWidth(gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() + ((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeft = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeight(gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() + ((gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTop()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTop((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTop = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetTopContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0) - (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft()));
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRight = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetRightContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0) - (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTop()));
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottom = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetBottomContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDurationContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalEdgeDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDuration = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetHorizontalEdgeDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDurationContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalEdgeDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDuration = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetVerticalEdgeDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setClockwise(true);
}
}}

}


{


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setClockwise(false);
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwise = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetClockwiseContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasingContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasingContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasingContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasingContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEasing((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasing = function(Easing, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Easing") return Easing;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.SetEasingContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClockwise() ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setToogleClockwise(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClockwise()) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setToogleClockwise(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getToogleClockwise() ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setClockwise(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getToogleClockwise()) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setClockwise(true);
}
}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwise = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.ToogleClockwiseContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClockwise()) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnTop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClockwise() ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnBottom((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeft = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClockwise() ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClockwise()) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnRight((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUp = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingUpContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClockwise() ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnTop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClockwise()) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnBottom((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingRightContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClockwise() ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnRight((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClockwise()) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1[k] = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDown = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsMovingDownContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) >= (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BottomLeftDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeft = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) <= (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TopRightDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTop = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnTopContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) >= (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TopRightDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.condition1IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) <= (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BottomRightDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnRightContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) >= (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BottomRightDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.condition1IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) <= (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BottomLeftDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottom = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.IsOnBottomContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDurationContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDurationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalEdgeDuration()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDuration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.TopRightDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalEdgeDuration()) + (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalEdgeDuration()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDuration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomRightDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 2 * (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalEdgeDuration()) + (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalEdgeDuration()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDuration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.BottomLeftDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HalfCurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalEdgeDuration()); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HalfCurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) >= Math.abs((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalEdgeDuration())));
}
}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HalfCurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalEdgeDuration())) / (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalEdgeDuration()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgress = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeProgressContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) >= (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TopRightDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.condition1IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) < (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BottomLeftDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) >= (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BottomRightDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.condition1IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) < (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Perimeter((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeOriginYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) >= (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TopRightDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}if ( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.condition1IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) < (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BottomLeftDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}
if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.GDObjectObjects1);

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.conditionTrue_1 = gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.condition0IsTrue_0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.conditionTrue_1.val = ((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentTime((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) < (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BottomRightDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}if (gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth()); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.EdgeTargetXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress()) * (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LoopDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTime = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.CurrentTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LoopDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * gdjs.evtTools.common.mod((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress()), 0.5); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTime = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.HalfCurrentTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.tween.ease((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEasing()), (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).EdgeOriginX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).EdgeTargetX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).EdgeProgress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext = {};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects1= [];
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects2= [];

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.tween.ease((( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEasing()), (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).EdgeOriginY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).EdgeTargetY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).EdgeProgress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))); }}}

}


};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement.prototype.DeltaYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("RectangleMovement::RectangleMovement", gdjs.evtsExt__RectangleMovement__RectangleMovement.RectangleMovement);