// DARK MODE FUNCTIONS //


let mode=0;
function changeToDarkMode(){
    switch(mode){
        case 0:
            mode=1 // Dark Styles
            document.body.style.backgroundColor="#222";
            document.getElementById('Top_Nav').style.background = "#1a1a1a";
            document.getElementById('Hello').style.color="#fff ";
            document.getElementById('MyName').style.color="#fff ";
            document.getElementById('Social_Github').style.filter = "invert(98%) sepia(48%) saturate(0%) hue-rotate(204deg) brightness(120%) contrast(100%)";
            document.getElementById('Social_Linkedin').style.filter = "invert(98%) sepia(48%) saturate(0%) hue-rotate(204deg) brightness(120%) contrast(100%)";
            document.getElementById('Social_Instagram').style.filter = "invert(98%) sepia(48%) saturate(0%) hue-rotate(204deg) brightness(120%) contrast(100%)";            
            document.getElementById('About_Me').style.background = "#262626";
            document.getElementById('About__Me').style.color="#fff";
            document.getElementById('Paragraph__About__Me').style.color="#fff";
            document.getElementById('Text_Skills').style.color="#fff";
            document.getElementById('Skill_HTML').style.color="#fff";
            document.getElementById('Skill_CSS').style.color="#fff";
            document.getElementById('Skill_JAVASCRIPT').style.color="#fff";
            document.getElementById('Skill_GIT').style.color="#fff";
            document.getElementById('Skill_GITHUB').style.color="#fff";
            document.getElementById('Hobbies').style.background = "#262626";
            document.getElementById('Hobbie_txt').style.color="#fff";
            document.getElementById('movies').style.color="#fff";
            document.getElementById('music').style.color="#fff";
            document.getElementById('running').style.color="#fff";
            document.getElementById('guitar').style.color="#fff";
            document.getElementById('games').style.color="#fff";
            document.getElementById('books').style.color="#fff";
            document.getElementById('Projects').style.color="#fff";
            document.getElementById('Project__One').style.color="#fff";
            document.getElementById('Project__Two').style.color="#fff";
            document.getElementById('Project__Three').style.color="#fff";
            document.getElementById('Project__Four').style.color="#fff";
            document.getElementById('Contact').style.background = "#262626";
            document.getElementById('Contact__Me').style.color="#fff";
            document.getElementById('Contact__Me___Paragraph').style.color="#fff";
            document.getElementById('developed__by').style.color="#fff";
            
            break
        case 1:
                mode=0 // Ligth Styles
                document.body.style.backgroundColor="#F5F5F8";
                document.getElementById('Top_Nav').style.background = "linear-gradient(to left, #f46b45, #eea849)";
                document.getElementById('Hello').style.color="#222 ";
                document.getElementById('MyName').style.color="#222 ";
                document.getElementById('Social_Github').style.filter = "invert(7%) sepia(13%) saturate(15%) hue-rotate(333deg) brightness(93%) contrast(99%)";        
                document.getElementById('Social_Linkedin').style.filter = "invert(7%) sepia(13%) saturate(15%) hue-rotate(333deg) brightness(93%) contrast(99%)";
                document.getElementById('Social_Instagram').style.filter = "invert(7%) sepia(13%) saturate(15%) hue-rotate(333deg) brightness(93%) contrast(99%)";            
                document.getElementById('About_Me').style.background = "#EAF2FD";
                document.getElementById('About__Me').style.color="#222";
                document.getElementById('Paragraph__About__Me').style.color="#222";
                document.getElementById('Text_Skills').style.color="#222";
                document.getElementById('Skill_HTML').style.color="#222";
                document.getElementById('Skill_CSS').style.color="#222";
                document.getElementById('Skill_JAVASCRIPT').style.color="#222";
                document.getElementById('Skill_GIT').style.color="#222";
                document.getElementById('Skill_GITHUB').style.color="#222";
                document.getElementById('Hobbies').style.background = "#fcf0ba";
                document.getElementById('Hobbie_txt').style.color="#222";
                document.getElementById('movies').style.color="#222";
                document.getElementById('music').style.color="#222";
                document.getElementById('running').style.color="#222";
                document.getElementById('guitar').style.color="#222";
                document.getElementById('games').style.color="#222";
                document.getElementById('books').style.color="#222";
                document.getElementById('Projects').style.color="#222";
                document.getElementById('Project__One').style.color="#222";
                document.getElementById('Project__Two').style.color="#222";
                document.getElementById('Project__Three').style.color="#222";
                document.getElementById('Project__Four').style.color="#222";
                document.getElementById('Contact').style.background = "#EAF2FD";
                document.getElementById('Contact__Me').style.color="#222";
                document.getElementById('Contact__Me___Paragraph').style.color="#222";
                document.getElementById('developed__by').style.color="#222";
                
            break    
    }
}