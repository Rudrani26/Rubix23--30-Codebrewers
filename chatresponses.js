function getBotResponse(input) {

    // Simple responses
    if (input == "hello" || input == "hi" || input == "hey") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "bye") {
        return "Talk to you later!";
    } else if (input == "where can i attend webinars?" || input== "where can i sign up for webinars?" || input == "webinars?") {
        return "you can sign up and attend webinars by clicking on Events";
    } else if (input == "can i host a webinar?") {
        return "yes, any volunteer can host a webinar";
    } else if (input == "donation?" || input == "i want to donate" || input == "where can i donate?") {
        return "you can donate money to the disaster survivors on the donate section.";
    } else if (input == "volunteer?" || input == "how can i volunteer?" || input == "where can i volunteer?") {
        return "you can become a volunteer at HelpingHands by signing up on our Volunteer Section."; 
    } else if (input == "earthquake" || input == "help earthquake") {
        return "Cover your head and neck with your arms. If a sturdy table or desk is nearby, crawl underneath it for shelter. Call on our helpline number: +1234567890 immediately.";
    } else if (input == "cyclone" || input == "help cyclone") {
        return "Take shelter in the safe part of the house. Board up glass windows or put storm shutters in place. Provide strong suitable support for outside doors. Call on our helpline number: +1234567890 immediately.";
    } else if (input == "help" || input == "help needed" || input == "emergency" || input == "disaster") {
        return "In case of nearby disaster or emergency, call on our helpline number: +1234567890 immediately.";
    } else if (input == "contact" || input == "how to reach you?" || input == "how to contact you?") {
        return "Reach out to us on our email ID: helpinghands@gmail.com. You can also call us on +9876543210. In case of nearby disaster or emergency, call on our helpline number: +1234567890 immediately.";
    }
     else {
        return "Try asking something else!";
    }
}