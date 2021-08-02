var dec;
function getos(id) {
    var os = id;
    document.getElementById("codedisp").innerHTML = "pkg install wget openssl-tool proot -y && hash -r && wget https://raw.fastgit.org/GT-610/AnLinux_CN/CN_mirror/Scripts/Installer/" + os + "/" + os.toLowerCase() + ".sh && bash " + os.toLowerCase() + ".sh";
}
function getdec(id) {
    dec = id;
    document.getElementById("disp-toggle").className = "visible";
    return dec;
}
function getde(id) {
    var de = id;
    switch (dec) {
        case "apt":
            document.getElementById("codedisp").innerHTML = "apt-get update && apt-get install wget -y && wget https://raw.fastgit.org/GT-610/AnLinux_CN/CN_mirror/Scripts/WindowManager/Apt/" + de + "/de-apt-" + de.toLowerCase() + ".sh && bash de-apt-" + de.toLowerCase() + ".sh";
            break;
        case "yum":
            document.getElementById("codedisp").innerHTML = "对于 arm64-v8a用户：yum install wget -y && wget https://raw.fastgit.org/GT-610/AnLinux_CN/CN_mirror/Scripts/WindowManager/Yum/arm" + de + "/de-yum-" + de.toLowerCase() + ".sh && bash de-yum-" + de.toLowerCase() + ".sh<br /><br />对于 armv7 用户：yum install wget --forcearch=armv7hl -y && wget https://raw.fastgit.org/GT-610/AnLinux_CN/CN_mirror/Scripts/DesktopEnvironment/Yum/Fedora/arm/" + de + "/de-yum-" + de.toLowerCase() + ".sh && bash de-yum-" + de.toLowerCase() + ".sh<br /><br />如果你不清楚设备的 CPU 架构，可先到互联网查询。";
            break;
        case "pacman":
            if (de == "LXDE") document.getElementById("codedisp").innerHTML = "pacman -Sy --noconfirm wget && wget https://raw.fastgit.org/GT-610/AnLinux_CN/CN_mirror/Scripts/DesktopEnvironment/Pacman/de-pac.sh && bash de-pac.sh"
            else document.getElementById("codedisp").innerHTML = "暂不提供。";
            break;
    }
}
function getssh(id) {
    var ssh = id;
    switch (ssh) {
        case "apt":
            document.getElementById("codedisp").innerHTML = "wget https://raw.fastgit.org/GT-610/AnLinux_CN/CN_mirror/Scripts/SSH/Apt/ssh-apt.sh && bash ssh-apt.sh";
            break;
        case "Fedora":
            document.getElementById("codedisp").innerHTML = "对于 arm64-v8a 用户：yum install wget -y && wget https://raw.fastgit.org/GT-610/AnLinux_CN/CN_mirror/Scripts/SSH/Yum/ssh-yum.sh && bash ssh-yum.sh<br /><br />对于 armv7 用户：yum install wget --forcearch=armv7hl -y && wget https://raw.fastgit.org/GT-610/AnLinux_CN/CN_mirror/Scripts/SSH/Yum/arm/ssh-yum.sh && bash ssh-yum.sh<br /><br />如果你不清楚设备的 CPU 架构，可先到互联网查询。";
            break;
        case "CentOS":
            document.getElementById("codedisp").innerHTML = "yum install wget -y && wget https://raw.fastgit.org/GT-610/AnLinux_CN/CN_mirror/Scripts/SSH/Yum/ssh-yum.sh && bash ssh-yum.sh";
            break;
        case "pacman":
            document.getElementById("codedisp").innerHTML = "pacman -Sy --noconfirm wget && wget https://raw.fastgit.org/GT-610/AnLinux_CN/CN_mirror/Scripts/SSH/Pacman/ssh-pac.sh && bash ssh-pac.sh";
            break;
    }
}
function getwm(id) {
    var wm = id;
    switch (dec) {
        case "apt":
        document.getElementById("codedisp").innerHTML = "apt-get update && apt-get install wget -y && wget https://raw.fastgit.org/GT-610/AnLinux-Resources/master/Scripts/WindowManager/Apt/" + wm + "/de-apt-" + wm.toLowerCase() + ".sh && bash de-apt-" + wm.toLowerCase() + ".sh";
        break;
        case "yum":
        document.getElementById("codedisp").innerHTML = "对于 arm64-v8a用户：yum install wget -y && wget https://raw.fasthit.org/GT-610/AnLinux_CN/CN_mirror/Scripts/DesktopEnvironment/Yum/Fedora/" + wm + "/de-yum-" + wm.toLowerCase() + ".sh && bash de-yum-" + wm.toLowerCase() + ".sh<br /><br />对于 armv7 用户：yum install wget --forcearch=armv7hl -y && wget https://raw.fastgit.org/GT-610/AnLinux_CN/CN_mirror/Scripts/DesktopEnvironment/Yum/Fedora/arm/" + wm + "/de-yum-" + wm.toLowerCase() + ".sh && bash de-yum-" + wm.toLowerCase() + ".sh<br /><br />如果你不清楚设备的 CPU 架构，可先到互联网查询。";
        break;
    }
}