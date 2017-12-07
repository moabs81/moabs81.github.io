This project is a simple functional mock up of a conceptual component for a small project. It takes in a data set and displays it as a simple table with sorting functionality. 

Compoments
    Page Layout Component - /src/components/pageLayout
        Page Layout is esssentially a wrapper for the presentation of the component
    App Component - /src/components/serverReviewsComponent
        Contained within page's contentContainer div
    
App Modules
    controlViewState = the app controller 
    updateViewState = callbacks for business logic and view state updates
    UIComponents = callbacks for building the UI

Test Data is found in /src/testData

1DistServer.js is a simple Node based server with baked-in routes for serving this project from a local dev environment. Don't overthink that :) 

index.html at the root is a path for the Github free hosting to get to /dist

I did write the webpack configurations myself and at the time I was really proud of that...