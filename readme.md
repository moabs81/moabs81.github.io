This project is a simple functional mock up of a conceptual component for a small project. It takes in a data set and displays it as a simple table with sorting functionality. 

Compoments
    Page Layout Component - /src/components/pageLayout
        Page Layout is esssentially a wrapper for the presentation of the component. It is a workbench of sorts that I've been working on for a bit as place to put components to showcase, in this case the server reviews component
    App Component - /src/components/serverReviewsComponent
        Contained within page's contentContainer div
    
App Modules
    controlViewState = the app controller 
    updateViewState = callbacks for business logic and view state updates
    UIComponents = callbacks for building the UI

Test Data is found in /src/testData

1DistServer.js is a simple Node based server with baked-in routes for serving this project from a local dev environment. Don't overthink that :) 

index.html at the root is a path for the Github free hosting to get to /dist

Future enhancements as of 12/7/2017 include:
-	completion of sort functions
-	final touches on UI
-	inclusion of a JavaScript test framework with unit tests across all modules
-	introduction of service worker to manage cache
-	re-factoring of application to make use of React.js library
