# Overview
This repository contains a test app that demonstrates how to get OIDC Auth working in the context of the new dotnet core + angular cli templates with server-side rendering.

# How This App Was Created

1. Install the [latest Angular-Cli-based templates](https://docs.microsoft.com/en-us/aspnet/core/spa/index#installation):
```
dotnet new --install Microsoft.DotNet.Web.Spa.ProjectTemplates::2.0.0-preview1-final
```
2. Create a new directory, navigate to it, and run:
```
dotnet new angular
```
3. Modify the project according to the [instructions in the template documentation under "Server-Side Rendering"](https://docs.microsoft.com/en-us/aspnet/core/spa/angular?tabs=visual-studio#server-side-rendering).

4. Follow instructions created by [Priyantha Lankapura](https://github.com/lankaapura) in [this repository](https://github.com/lankaapura/Angular-AspNetCore-Idsvr) to add and configure the [angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc/) package.
