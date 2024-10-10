FROM maven:3.9-eclipse-temurin-23-alpine as maven-node

WORKDIR /app

COPY . .

RUN mvn clean package -Dmaven.test.skip

FROM eclipse-temurin:23

ENV TZ=Europe/Berlin

ARG PORT
EXPOSE $PORT

RUN mkdir /opt/app
COPY --from=maven-node /app/target/spring-boot-api.jar /opt/app/spring-boot-api.jar

#CMD ["java", "-Xms512m", "-Xmx7168m", "-jar", "/opt/app/spring-boot-api.jar", "--spring.profiles.active=prod"]
#CMD ["java", "-Xmx7168m", "-jar", "/opt/app/spring-boot-api.jar", "--spring.profiles.active=prod"]
CMD ["java", "-jar", "/opt/app/spring-boot-api.jar", "--spring.profiles.active=prod"]
