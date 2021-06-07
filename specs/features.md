# Features

This document documents the features of Easify, a simple bullet journal by Team WeCommitToMaster.

## Dashboard - Now
The dashboard is where a user can see their journal at a high level glance. Each "chapter" of the journal is separated by school year. The dashboard contains this functionality:

* **Add a school year**. This enables users to add a year to their journal. *Each year is compartmentalized, and has its own set of entries.*
* **Settings**. This button opens a dropdown menu that contains all the settings. *Currently it only has the Reset Journal option, but new settings can be added later.*
* **Reset journal**. This resets the journal and deletes ALL data. At first this was used simply for debugging purposes, now it is there for people who have secrets to delete.
* **Year Cards**. The year cards each navigate to their own compartmentalized year page. Purpose for existence is self-explanatory; we chose this method because they should be intuitive for even new users to work with.

## Dashboard - Future
There are several features in the dashboard that were cut.
* **Profiles**: This feature allows a user to switch between profiles. For example, a user could be attending multiple colleges/universities concurrently, and switching profiles would allow them to separate their entries. *This feature was dropped because the time commitment needed was not worth the number of users we expect in our userbase (at least with the time we were given).*
* **Themes**: This feature allows a user to switch between themes (for example, light and dark). *This feature was dropped because our group decided it was not a priority, and we never got around to implementing it.*

## Entry Page - Now
Once a user clicks on a year, they are taken to the main content page. Here, a user can interact with their journal. The main content page contains this functionality:

* **Return to dashboard**. This enables users to return to the dashboard. *Helps guide navigation.*
* **Quarters**. Each quarter has its own tab. *Encourages neater organization; a user would want to avoid having to sift through too many different entries. Our user stories were geared towards students in quarter system.*
* **Weeks**. Each week is separated into its own tab. *Same reason for quarters.*
* **Create Entry**. Allows the user to create a new entry on the current week. The default title is set to the current day (like a traditional journal). *Provides an intuitive way to add entries.*

## Entry Page - Future
There were several features that were cut, but some of these were replaced by others.
* **Search**. This allowed users to search keywords for entries. *This feature was dropped because it was too complex. We replaced it by trying to encourage organization through the tabs.*

## Entries - Now
Entries are added with the appropriate button. They hold the bullets that give the journal the name. It contains the following functionality:
* **Editable Title**. The title of each entry can be changed. *Gives the user greater freedom to label things.*
* **Delete Entry**. Entries can be deleted. *Gives the user greater freedom over their journal.*
* **Add Bullets**. Bullets are added with this button. *Essential Bullet Journal Functionality*

Bullets have the following functionality:
* **Change Bullet Icon**. Users can change the icon they see to differentiate between different category of tasks visually. *Essential Bullet Journal Functionality*
* **Push forward**. Moves this bullet to the next entry created directly after this one. *Simulates the "move forward" of a paper Bullet Journal*
* **Mark complete**. Marking an entry complete crosses it out. *Essential Bullet Journal Functionality*
* **Delete Bullet**. A row can be deleted, since completed tasks are crossed out (as to not confuse the user). *Essential Bullet Journal Functionality*

## Entries - Future
There aren't a lot of features that were cut for the entries, but the following features can be added: 
* **Custom bullet types**. Maybe 3 bullet types do not fully capture a user's needs. Allowing the user to create their own bullet types might alleviate this problem.
* **Tags**. This might have been more relevant if search was a feature implemented, but tags could also provide organization.
* **Color coding**. Allow a user to color code entries to further separate them/distinguish them.