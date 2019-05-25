FROM mcr.microsoft.com/dotnet/core/sdk:2.2-alpine

COPY ./ScreenFliteFileService/ScreenFliteFileService /home/dotnet/ScreenFliteFileService
COPY ./ScreenFliteFileService/Tests /home/dotnet/Tests
COPY ./ScreenFliteFileService/ScreenFliteFileService.sln /home/dotnet

WORKDIR /home/dotnet

RUN dotnet build
RUN rm -rf ScreenFliteFileService/obj

WORKDIR /home/dotnet/ScreenFliteFileService/bin/Debug/netcoreapp2.2

EXPOSE 5000
EXPOSE 5001

CMD dotnet ScreenFliteFileService.dll
