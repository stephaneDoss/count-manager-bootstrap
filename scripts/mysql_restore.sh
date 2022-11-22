cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=root my_database_name


# mysqlUser="root"
# mysqlPassword="root"
# mysqlHost="127.0.0.1"
# DB="my_db"
# credentialsFile="/mysql-credentials.cnf"
# backup_file="backup.sql.gz"

# /usr/local/bin/docker-compose exec -T mysql bash -c "
# echo '[client]' > ${credentialsFile} \
# && echo 'user=${mysqlUser}' >> ${credentialsFile} \
# && echo 'password=${mysqlPassword}' >> ${credentialsFile} \
# && echo 'host=${mysqlHost}' >> ${credentialsFile} \
# && echo '`date +%Y-%m-%d_%H:%M:%S` :: create credential file finish' \
# "

# #restore with gzip file
# gunzip < ${backup_file} | /usr/local/bin/docker-compose exec -T mysql /usr/bin/mysql --defaults-extra-file="${credentialsFile}"

# #restore with not gzip file
# #docker-compose exec -T mysql /usr/bin/mysql --defaults-extra-file="${credentialsFile}" < ${backup_file}
# echo "`date +%Y-%m-%d_%H:%M:%S` :: Finish restore"