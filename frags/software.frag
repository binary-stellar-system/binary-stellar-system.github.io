<!--a href="email_form.html" >Email me with any questions or comments.< /a-->

<div class="tabledata">

    <p><b>NOTE: Unless otherwise specified, these programs are all
            released under the GPL. If not supplied with the software in a License
            file then the GPL can be found here
            <a href="gpl.html" target="_blank" title="GNU General Public License">gpl.html</a>.
        </b></p>
    <ul class="tree_list summary">
        <li id="gtkc"><span class="toplevel collapsed">C</span>
            <ul id="gtkcpgms" class="tree_child_hidden">
                <li><a href="#C-Gtk">godura</a></li>
                <li><a href="#C-Gtk">GUTime</a></li>
                <li><a href="#C-Gtk">mpstat</a></li>
            </ul>
        </li>
        <li id="tcltk">
            <span class="toplevel collapsed">Tcl/Tk</span>
            <ul id="tcltkpgms" class="tree_child_hidden">
                <li><a href="#Tcl-Tk">TkNotePad</a></li>
            </ul>
        </li>
        <li id="javascript">
            <span class="toplevel collapsed">JavaScript</span>
            <ul id="javascriptpgms" class="tree_child_hidden">
                <li><a href="#JavaScript">EcmaScripts</a></li>
                <li><a href="#JavaScript">Calendar</a></li>
                <li><a href="#JavaScript">Calculator</a></li>
                <li><a href="#JavaScript">Digital Clock</a></li>
            </ul>
        </li>
        <li id="php">
            <span class="toplevel collapsed">PHP</span>
            <ul id="phppgms" class="tree_child_hidden">
                <li><a href="#PHP">ASCII Table</a></li>
            </ul>
        </li>
        <li id="perl">
            <span class="toplevel collapsed">Perl</span>
            <ul id="perlpgms" class="tree_child_hidden">
                <li><a href="#PERL">Apcupsd Web Configuration Tool</a></li>
            </ul>
        </li>
        <li id="java"><span class="toplevel collapsed">Java / JSP</span>
            <ul id="javapgms" class="tree_child_hidden">
                <li><a href="#JAVA">jwmailapp</a></li>
            </ul>

        </li>

    </ul>
    <a name="C-Gtk"></a><b>C</b>
    <p><a target="_blank" href="https://github.com/joseph-jja/miscellaneous">godura on github</a><br />

        This is a simple editor that requires gtk2.0+. It will not work with
        earlier version of gtk+. It is basically an implementation of my Tk
        Notepad Editor. It is not complete. See the INSTALL, README, TODO, and
        KNOWNBUGS first. <a target="_blank" href="images/screenshots/godura.jpg"> screen shot</a>. NOTE: This is
        pretty STABLE. </p>
    <p><a target="_blank" href="https://github.com/joseph-jja/miscellaneous">GUTime on github</a><br />
        This is a simple uptime applet for the GNOME panel. It was basically
        take from the GNOME Applets example and enhanced. It now installs the
        the .server file. This is the first release for gtk 2.x and GNOME 2.x
        on x86 Linux machines only. Here is a <a target="_blank" href="images/screenshots/GUTime.jpg">screen shot</a>.
        NOTE: This is considered STABLE. </p>
    <p><a target="_blank" href="https://github.com/joseph-jja/miscellaneous">mpstat on github</a><br />
        <b>Unmaintained</b><br />
        This is a program that I have hacked for Linux specifically. It was
        hacked from the source code to vmstat.c. The mpstat.c file I have
        written no longer needs procps in order to compile. Here is a <a target="_blank" href="images/screenshots/mpstat.jpg">screen shot</a> . NOTE: this is INCOMPLETE but
        STABLE
        as of 2 July, 1999. </p>

    <hr style="height:2px; width:90%; text-align: center; " />

    <p><a name="Tcl-Tk"></a><b>Tcl/Tk</b></p>
    <p><a target="_blank" href="https://github.com/joseph-jja/tknotepad">
            Tk Notepad version 0.8.2
            <img target="_blank" src="tknotepadicon.jpg" alt="TkNotePad by Joseph Acosta. Click here to download." style="vertical-align:middle;border:none;" height="42" width="84" /></a><br />
        When I first started using Linux I could not find any good text
        editors, other than vi and Emacs. There were other editors, but often I
        could not get them to compile or they did not work the way I expected
        them to, or they were just to different. I soon came across a Tcl/Tk
        program, that had a bug in it and fixed it. I found Tcl/Tk to be a
        rather easy to understand language. I then decided to learn more about
        Tcl/Tk and bought a book on Tcl/Tk. Soon I had written a basic editor
        that could read and write a file and TkNotepad was born. I then decided
        on a design that I would find familiar to myself. I decided to mimic
        the behavior of MS Windows Notepad. A simple editor that had cut, copy
        and paste, and a few other features. It now mimics most of the behavior
        of Notepad, and has a few added features like unlimited Undo/Redo. It
        does not print under Windows, or Mac, but it will run on those
        platforms
        and all the other functionality works. It was written entirely in
        Tcl/Tk. I consider it to be completed, as most of the known bugs are
        now removed. I will continue to work on removing those last bugs and
        some code cleanups, but there will probably not be any new features
        added. It is very stable and I use it quite frequently myself.
        Originally it was designed using Tcl7.6/Tk4.2, but now it has since
        moved to Tcl8.4/Tk8.4 and no longer works with Tcl 7.6 / Tk 4.2.
        Although it is designed to resemble Notepad for windows it also runs on
        Linux, and other UNIX flavors, Windows 95/98/NT, and I have been
        informed that it works on Macintosh also. <br />
        <b>It was written once and runs anywhere, but it's BETTER on
            LINUX!</b><br />
        Here is a <a target="_blank" href="shottknotpad.jpg">screen shot</a> taken with gimp
        for Linux. </p>
    <hr style="height:2px; width:90%; text-align: center; " />
    <p><a name="JavaScript"></a><b>JavaScript</b></p>
    <p><a target="_blank" href="https://github.com/joseph-jja/EcmaScripts">EcmaScripts</a><br />
        Many iterations and now we have this. Most of the old code is still in use, but migrated slowly over time. From
        objects all declared on the window object, to namespace under WebBrowser and now import/export and es6 syntax.
        <br />
        Currently Supported browsers are moden browsers and IE11+.
        <br />
        &nbsp;
        <br />
        See repo src/client/pages for implemetations and then view source of this page :)
    </p>
    <p><a target="_blank" href="calendar.html">Calendar Examples</a><br />
        <br />
        See example page for implementations and git repo
        <br />
    </p>

    <p><a target="_blank" href="calculator.js">calculator.js</a><br />
        This was my first real javascript page. It is basically a calculator
        that is done using HTML forms and JavaScript. I originally did this
        program in 1996 and it was not till late 1999 that I started modifying
        it again. In mid 2000 I re-implemented the calculator to make it work
        better. There is at least one bug that I know of, but it basically
        works. It does multiplication, division, addition, subtraction, cosine,
        sine, tangent, inverse (1/x), x^y, arccos, arcsin, arctan and a few
        other functions. I may make some more additions to improve it and make
        it truly useful on the web. You can try it out <a target="_blank" href="calc.html">
            here</a>.<br />
        <br />My alternate calculator re-write in progress...

    </p>
    <p><a href="digitalclock.js">digitalclock.js</a><br />
        This is a little digital clock form 'modern' browsers. Currently
        Supported browsers those that support the document.getElementById, the Date object,
        the setTimeout() function, and Object.innerHTML.
        It is a good idea to get the WebBrowser object and use it for browser
        detection and upon detecing a supported browser then call this code.
        Currently just download the clock and <br />
        &nbsp;
        <br />
        Use:
        <br />
        Create the script tag and set src= to the downloaded file.
        <br /> Then a div or span on the page where you want the clock on the page.
        <br /> Lastly, create the DigitalClock, set its id and start it.
        <br />
        myclock = new DigitalClock();
        <br />myclock.setId(clockId);
        <br />myclock.startClock();
        <br />
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        // clockId is the id of the div that the clock will run in.
        <br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        // The element should already be created.
        <br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        // It is typically a div, but any element that supports
        innerHTML should work.
        <br />
    </p>
    <hr style="height:2px; width:90%; text-align: center; " />
    <p><a name="PHP"></a><b>PHP</b></p>
    <p><a href="https://github.com/joseph-jja/miscellaneous">
            ascii_table.php</a><br />
        This is my php script to generate the ascii table. It also generates
        the extended ascii table. For the ascii table this script shows the
        decimal value, the character that they represent and also the
        equivelant
        octal, hexadecimal, and binary values. For the extended ascii table it
        only shows the decimal value, and the equivelant octal, hexadecimal,
        and binary values. The output can be viewed <a href="table.html">here</a>.</p>
    <hr style="height:2px; width:90%; text-align: center; " />
    <p><a name="PERL"></a><b>Perl</b></p>
    <p><a href="https://github.com/joseph-jja/miscellaneous">
            apcupsdconf on github</a><br />
        <b>Unmaintained</b><br />
        This is my web based application to configure Apcupsd. Apcupsd is the
        apc ups daemon. This tool, when used in conjunction with Apcupsd, makes
        it slightly easier to configure the apcupsd.conf file, by informing the
        user when an error may occur in a selected configuration. A few screen
        shots can be seen <a href="apcupsd.conf_01.jpg">here</a>, <a href="apcupsd.conf_02.jpg"> here</a>, <a href="apcupsd.conf_admin_tool.jpg">here</a>, and <a href="apcupsd.conf_pwd_tool.jpg"> here</a>. </p>
    <hr style="height:2px; width:90%; text-align: center; " />
    <p><a name="JAVA"></a><b>Java / JSP</b></p>
    <p><a href="https://github.com/joseph-jja/miscellaneous">jwmailapp on github</a><br />
        This is a complete refactor of the the original 2001 codebase. The first refactor was in 2006, this has taken
        the 2006 code and refactored it again. The old POP3 class has been refactored into a new POP3Service.
        The old using mail tag files to send mail have been replaced by an SMTPService. Struts and tiles have been
        implemented, so there are now two layouts, one for ajax and one for regular pages.
        Configuration is done via an XML file for the pop mail server.
        JavaScript and AJAX are used for reading messages and refreshing the inbox.
        <br /> <br />
        Right now you can only have one pop server because that is specifed in xml config file.
        This may change in a future release.
        <br /> <br />
        The UI works but it is not considered completely polished at this time. It needs a 'design' touch as well
        the ability to send and recieve attachments.
        <br>Pictures can be found
        <a href="jwmailapp_logon.jpg">here</a>,
        <a href="jwmailapp_send.jpg">here</a>,
        <a href="jwmailapp_read.jpg">here</a>,
        and <a href="jwmailapp_inbox.jpg">here</a>. </p>
</div>
