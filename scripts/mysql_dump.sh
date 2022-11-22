#!/bin/sh
 
DBNAME=my_database_name
DATE=`date +"%Y%m%d"`
SQLFILE=$DBNAME-${DATE}.sql
mysqldump --opt --user=root --password $DBNAME > $SQLBACKUP
gzip $SQLBACKUP