FROM jboss/keycloak:6.0.1

ADD import-realm.json /opt/jboss/keycloak/

CMD ["-b", "0.0.0.0", "-Dkeycloak.import=/opt/jboss/keycloak/import-realm.json"]
