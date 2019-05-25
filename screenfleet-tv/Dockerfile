FROM openjdk:12-jdk-alpine

COPY ./src /home/java/src/
COPY ./pom.xml /home/java
WORKDIR /home/java

RUN apk add maven
RUN mvn package
RUN apk del maven \
 && rm -rf target/classes target/generated-sources target/generated-test-sources \
    maven-archiver maven-status surefire-reports test-classes \
    screenfleet-0.0.1-SNAPSHOT.jar.original

EXPOSE 8080

CMD ["java", "-jar", "-Dserver.port=8080", "target/com.screen.fleet.screenfleet.tv-1.0-SNAPSHOT.jar"]
