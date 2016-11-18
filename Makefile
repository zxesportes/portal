createdb:
	@docker-compose run --rm web /usr/local/bin/python create_db.py
rebuild:
	@docker-compose build --force-rm --no-cache
