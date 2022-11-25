let panicButton = "false";
var storage = window.localStorage,
wireframeCode = '';

function getWireframeCode() {
    return `<div class="panicButton">
    <div class="settingsSection">
            <div class="settingsTitle">
                Panic Button
            </div>
        <div class="settingsSaveHolder">
            <button class="settingsSave" id="enablePB" onclick="alert(panicButton)"> Toggle </button>
        </div>
    </div>
</div>`
}

function loadCss(url) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    head.appendChild(link);
}
loadCss('https://collertabber.github.io/pt-addons/style.css');

const photopAddonsButton = createElement('div', 'sidebarButton', findI('sidebarButtons'))
    photopAddonsButton.innerHTML = '<button class="custSidebarButton"><div class="sidebarButtonImg"><svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M126.5 149C138.374 149 148 139.374 148 127.5C148 115.626 138.374 106 126.5 106C114.626 106 105 115.626 105 127.5C105 139.374 114.626 149 126.5 149Z" fill="var(--themeColor)"></path><path d="M101 64L108.972 12.846C109.048 12.3591 109.467 12 109.96 12H144.04C144.533 12 144.952 12.3591 145.028 12.846L153 64" stroke="var(--themeColor)" stroke-width="20"></path><path d="M153 192L145.028 243.154C144.952 243.641 144.533 244 144.04 244H109.96C109.467 244 109.048 243.641 108.972 243.154L101 192" stroke="var(--themeColor)" stroke-width="20"></path><path d="M84.5744 182.517L36.2877 201.19C35.8281 201.367 35.3074 201.184 35.061 200.757L18.0211 171.243C17.7747 170.816 17.876 170.274 18.2598 169.964L58.5744 137.483" stroke="var(--themeColor)" stroke-width="20"></path><path d="M169.426 73.4833L217.712 54.8103C218.172 54.6326 218.693 54.8162 218.939 55.243L235.979 84.757C236.225 85.1838 236.124 85.7265 235.74 86.0357L195.426 118.517" stroke="var(--themeColor)" stroke-width="20"></path><path d="M195.426 137.483L235.74 169.964C236.124 170.274 236.225 170.816 235.979 171.243L218.939 200.757C218.693 201.184 218.172 201.367 217.712 201.19L169.426 182.517" stroke="var(--themeColor)" stroke-width="20"></path><path d="M58.5744 118.517L18.2598 86.0357C17.876 85.7265 17.7747 85.1838 18.0211 84.757L35.061 55.243C35.3074 54.8162 35.8281 54.6326 36.2877 54.8103L84.5744 73.4833" stroke="var(--themeColor)" stroke-width="20"></path><path d="M194 128C194 165.003 164.003 195 127 195C89.9969 195 60 165.003 60 128C60 90.9969 89.9969 61 127 61C164.003 61 194 90.9969 194 128Z" stroke="var(--themeColor)" stroke-width="20"></path></svg></div> BP Addons </button>'
wireframes['photopaddons'] = getWireframeCode();
photopAddonsButton.addEventListener("click", function(){
  document.getElementsByClassName("pageHolder")[0].innerHTML = wireframes['photopaddons'];
});
document.getElementsByClassName("sidebarSection")[1].appendChild(photopAddonsButton);
