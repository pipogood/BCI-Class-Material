/******************************* 
 * Motorimageryexperiment *
 *******************************/


// store info about the experiment session:
let expName = 'MotorImageryExperiment';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(walcome_screenRoutineBegin());
flowScheduler.add(walcome_screenRoutineEachFrame());
flowScheduler.add(walcome_screenRoutineEnd());
flowScheduler.add(comfirmRoutineBegin());
flowScheduler.add(comfirmRoutineEachFrame());
flowScheduler.add(comfirmRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(goodbye_screenRoutineBegin());
flowScheduler.add(goodbye_screenRoutineEachFrame());
flowScheduler.add(goodbye_screenRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'cue_stims.xlsx', 'path': 'cue_stims.xlsx'},
    {'name': 'images/feet.jpg', 'path': 'images/feet.jpg'},
    {'name': 'images/left.jpg', 'path': 'images/left.jpg'},
    {'name': 'images/right.jpg', 'path': 'images/right.jpg'},
    {'name': 'images/idle.jpg', 'path': 'images/idle.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var walcome_screenClock;
var textwelcomescreen;
var comfirmClock;
var text;
var keySpacebar;
var trialClock;
var cross_on_screen;
var arrow;
var rest_cue;
var stim_image;
var goodbye_screenClock;
var text_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "walcome_screen"
  walcome_screenClock = new util.Clock();
  textwelcomescreen = new visual.TextStim({
    win: psychoJS.window,
    name: 'textwelcomescreen',
    text: 'Welcome to this experiment',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "comfirm"
  comfirmClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: "If you're ready please enter [spacebar]",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  keySpacebar = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  cross_on_screen = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_on_screen', 
    vertices: 'cross', size:[0.5, 0.5],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0588, 0.6157, 0.8431]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  arrow = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow', 
    vertices: 'arrow', size:[0.5, 0.5],
    ori: 1.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([1.0, (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  rest_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'rest_cue',
    text: 'REST',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  stim_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "goodbye_screen"
  goodbye_screenClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Experiment End\n\nThank for participanting',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var walcome_screenMaxDurationReached;
var walcome_screenMaxDuration;
var walcome_screenComponents;
function walcome_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'walcome_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    walcome_screenClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    walcome_screenMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('walcome_screen.started', globalClock.getTime());
    walcome_screenMaxDuration = null
    // keep track of which components have finished
    walcome_screenComponents = [];
    walcome_screenComponents.push(textwelcomescreen);
    
    walcome_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function walcome_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'walcome_screen' ---
    // get current time
    t = walcome_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textwelcomescreen* updates
    if (t >= 0.0 && textwelcomescreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textwelcomescreen.tStart = t;  // (not accounting for frame time here)
      textwelcomescreen.frameNStart = frameN;  // exact frame index
      
      textwelcomescreen.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textwelcomescreen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textwelcomescreen.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    walcome_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function walcome_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'walcome_screen' ---
    walcome_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('walcome_screen.stopped', globalClock.getTime());
    if (walcome_screenMaxDurationReached) {
        walcome_screenClock.add(walcome_screenMaxDuration);
    } else {
        walcome_screenClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var comfirmMaxDurationReached;
var _keySpacebar_allKeys;
var comfirmMaxDuration;
var comfirmComponents;
function comfirmRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'comfirm' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    comfirmClock.reset();
    routineTimer.reset();
    comfirmMaxDurationReached = false;
    // update component parameters for each repeat
    keySpacebar.keys = undefined;
    keySpacebar.rt = undefined;
    _keySpacebar_allKeys = [];
    psychoJS.experiment.addData('comfirm.started', globalClock.getTime());
    comfirmMaxDuration = null
    // keep track of which components have finished
    comfirmComponents = [];
    comfirmComponents.push(text);
    comfirmComponents.push(keySpacebar);
    
    comfirmComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function comfirmRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'comfirm' ---
    // get current time
    t = comfirmClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *keySpacebar* updates
    if (t >= 0.0 && keySpacebar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keySpacebar.tStart = t;  // (not accounting for frame time here)
      keySpacebar.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keySpacebar.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keySpacebar.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keySpacebar.clearEvents(); });
    }
    
    if (keySpacebar.status === PsychoJS.Status.STARTED) {
      let theseKeys = keySpacebar.getKeys({keyList: ['space'], waitRelease: false});
      _keySpacebar_allKeys = _keySpacebar_allKeys.concat(theseKeys);
      if (_keySpacebar_allKeys.length > 0) {
        keySpacebar.keys = _keySpacebar_allKeys[_keySpacebar_allKeys.length - 1].name;  // just the last key pressed
        keySpacebar.rt = _keySpacebar_allKeys[_keySpacebar_allKeys.length - 1].rt;
        keySpacebar.duration = _keySpacebar_allKeys[_keySpacebar_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    comfirmComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function comfirmRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'comfirm' ---
    comfirmComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('comfirm.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keySpacebar.corr, level);
    }
    psychoJS.experiment.addData('keySpacebar.keys', keySpacebar.keys);
    if (typeof keySpacebar.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keySpacebar.rt', keySpacebar.rt);
        psychoJS.experiment.addData('keySpacebar.duration', keySpacebar.duration);
        routineTimer.reset();
        }
    
    keySpacebar.stop();
    // the Routine "comfirm" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cue_stims.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset(routineTimer.getTime());
    routineTimer.add(9.000000);
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    arrow.setOri(arrow_orientation);
    stim_image.setImage(stim_images);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(cross_on_screen);
    trialComponents.push(arrow);
    trialComponents.push(rest_cue);
    trialComponents.push(stim_image);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cross_on_screen* updates
    if (t >= 0.0 && cross_on_screen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_on_screen.tStart = t;  // (not accounting for frame time here)
      cross_on_screen.frameNStart = frameN;  // exact frame index
      
      cross_on_screen.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cross_on_screen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cross_on_screen.setAutoDraw(false);
    }
    
    
    // *arrow* updates
    if (t >= 1.5 && arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow.tStart = t;  // (not accounting for frame time here)
      arrow.frameNStart = frameN;  // exact frame index
      
      arrow.setAutoDraw(true);
    }
    
    frameRemains = 1.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (arrow.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      arrow.setAutoDraw(false);
    }
    
    
    // *rest_cue* updates
    if (t >= 6.5 && rest_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rest_cue.tStart = t;  // (not accounting for frame time here)
      rest_cue.frameNStart = frameN;  // exact frame index
      
      rest_cue.setAutoDraw(true);
    }
    
    frameRemains = 6.5 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (rest_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rest_cue.setAutoDraw(false);
    }
    
    
    // *stim_image* updates
    if (t >= 2.5 && stim_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_image.tStart = t;  // (not accounting for frame time here)
      stim_image.frameNStart = frameN;  // exact frame index
      
      stim_image.setAutoDraw(true);
    }
    
    frameRemains = 2.5 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stim_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim_image.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    if (trialMaxDurationReached) {
        trialClock.add(trialMaxDuration);
    } else {
        trialClock.add(9.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var goodbye_screenMaxDurationReached;
var goodbye_screenMaxDuration;
var goodbye_screenComponents;
function goodbye_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'goodbye_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    goodbye_screenClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    goodbye_screenMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('goodbye_screen.started', globalClock.getTime());
    goodbye_screenMaxDuration = null
    // keep track of which components have finished
    goodbye_screenComponents = [];
    goodbye_screenComponents.push(text_2);
    
    goodbye_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function goodbye_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'goodbye_screen' ---
    // get current time
    t = goodbye_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    goodbye_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function goodbye_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'goodbye_screen' ---
    goodbye_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('goodbye_screen.stopped', globalClock.getTime());
    if (goodbye_screenMaxDurationReached) {
        goodbye_screenClock.add(goodbye_screenMaxDuration);
    } else {
        goodbye_screenClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
