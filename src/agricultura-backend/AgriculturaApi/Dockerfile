FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
RUN apt-get update && apt-get install -y libgdiplus

# /app directory is the where the binary files are will be present
WORKDIR /app

# Start to build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Copy all source files to /src folder
# This is necessary for solutions. (Multiple projects, also you can define this by specifying projects)
COPY ./ /src
WORKDIR /src


RUN dotnet restore "AgriculturaApi.csproj"
RUN dotnet build "AgriculturaApi.csproj" -c Release -o /app

# Rename the image as publish
FROM build AS publish

RUN dotnet publish "AgriculturaApi.csproj" -c Release -o /out


# Building the project is done. We need the runtime image.
FROM base


# Go back to /app
WORKDIR /app

RUN sed -i 's/MinProtocol = TLSv1.2/MinProtocol = TLSv1/g' /etc/ssl/openssl.cnf
RUN sed -i 's/MinProtocol = TLSv1.2/MinProtocol = TLSv1/g' /usr/lib/ssl/openssl.cnf

RUN ln -sf /usr/share/zoneinfo/posix/America/Tegucigalpa /etc/localtime

# Copy all published files into /app folder
COPY --from=publish /out .


# Output port for the ASP.NET Core
ENV ASPNETCORE_URLS http://+:5555
EXPOSE 5555

ENTRYPOINT ["dotnet", "AgriculturaApi.dll"]