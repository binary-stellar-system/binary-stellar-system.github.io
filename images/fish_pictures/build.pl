#! /usr/bin/perl

@GROUPS=("gallon_tank", "goldfish", "guppies", "firemouth", "convict", "white_cloud", "barbs", "betta", "ancistrus", "plant", "mollies", "platy", "blue_ram", "jack_dempsey", "koi", "wojtek");

foreach (@GROUPS) { 

    $img = $_;
    @IMAGES = split(/\n/, `ls *$img*`);
    foreach (@IMAGES) { 
        $image = $_;
        $text = $image;
        $text =~ s/\.jpg//g;
        $text =~ s/\_01//g;
        $text =~ s/\_/ /g;
        print "<li><a title=\"$text\" href=\"$image\" target=\"_blank\">$text</a></li>";
        print "\n";
    }
}
