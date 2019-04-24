# JCF-RTF
Recent Topic Filter for JCF
Install to wrappers, and alter the following variables:


**excludeList** = Forum ID numbers to exclude from the recent topics list, as an array *eg [0,1,2,3,4]*

**topicMax** = Maximum number of topics to display after exclusions

**appendLocation** = Selector of target element to insert the cached recent topics into. Leave blank if you don't want this functionality


Be sure to set **Number of topics to show in 'Recent Topic Activity' display?** under **General Settings > Topics, Posts & Polls** in your forum's Administrator Control Panel to **15**. This is to ensure there's an ample number of topics to filter from.


Keep in mind, this script will not pull 'extra' recent topics if the list (after filtering) is not greater than or equal to **topicMax**.


This script also does not format the topic list, but if you're up for it you can add those modifications on line 18.
