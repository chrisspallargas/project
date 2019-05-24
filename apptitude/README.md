
# APPTITUDE PROJECT

Apptitude is a mobile application thought for everybody who would have like to be fit, but can not go to the gym. It is specified for ones who want a fast training, without fitness material and in a limited space. Although, it is also usefull for long trainings and to use it as your usual App to be in shape.

The mision of this project is, other than helping people to have the habbit of exercising, showing that there are no excuses when you want something, and although we live in a society where everything goes fast, to learn dealing with that speed and find some minutes a day for ourselves is posible and  very beneficial for our health. 
  
This project has been developed for the final project of the Front-End course in Skylab Coders Academy.  

## Functional description

Users should be registerred to enjoy this app, so the first thing we find is the Home page where, if you are logged you just have to authenticate yourself, and if it is the first time visiting us, you will have to register filling a simple form.

Once inside the app, there are two training options: choosing your exercises from a picking, or let the app make a random for you. Both options will ask the user to specified how many exercises want to train, which muscular groups want to focus in, and how long will each exercise and the break time take.

Another functionality we will find, is that user will be able to save the routines to re-training them in the future. The button 'Save' is available at the beginning and at the end of the process. This saved routines will be listed in a section called 'My Routines'.

Here there is a flowchart of all the user experience in Apptitude:

![image](https://raw.githubusercontent.com/chrisspallargas/project/develop/apptitude/FlowchartApptitude.png)

## Technique description
The front-end is created using ReactJS (React-router, components, pages, Redux (userInfo)). 

SCSS is used to styled all the App. 

The back-end is created with Frebase (authentication, function, storage and database)

Components and Pages details:

COMPONENTS:
- AskUser
- ButtonComponent
- Buttons
- CounterDown
- Create
- CurrentExercise
- Exercise
- ExerciseTabs
- FaveItem
- LogIn
- Modal
- ModalSave
- MuscularGroupOption
- Nav
- Questions
- SignIn
- StartingCounter

PAGES:
- Home
- MyFave
- OptionPage
- PickingPage
- RandomPage
- TrainingRoutine

## Modelo de datos:

Users = [ { Name, Email, myRoutines: ['id'], myRoutinesNames: ['name'], uid } ];

Exercises = [ {name, description,img , intensity, muscularGroup, id} ];

Routines = [ {breaktime, duration, id, exercises: [duration, idExercise], name} ];
