FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /app

COPY *.sln .
COPY ScreenFliteFileService/*.csproj ./ScreenFliteFileService/
RUN dotnet restore

COPY ScreenFliteFileService/. ./ScreenFliteFileService/
WORKDIR /app/ScreenFliteFileService
RUN dotnet publish -c Release -o out

EXPOSE 5000-5001
ENTRYPOINT [ "dotnet", "watch", "run", "--no-restore", "--urls", "https://0.0.0.0:5000"]