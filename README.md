# Davant

### Dev setup

- [VSCode](https://code.visualstudio.com/)
- [Node LTS](https://nodejs.org/en/download/)

### Scripts

#### Install dependencies

```sh
npm install
```

#### Run local webserver with edit-refresh

```sh
./scripts/run_server_local.sh
```

#### Build and run the server in prod mode

Build the server with:

```sh
./scripts/build_server_prod.sh
```

Run the server with:

```sh
./scripts/run_server_prod.sh
```

### Tips

#### pyenv install not working on M1

If your pyenv does not work on M1 machines after installing xcode, you may need to reinstall xcode command line tools. [Stack Overflow Link](https://stackoverflow.com/questions/65778888/pyenv-configure-error-c-compiler-cannot-create-executables)

```sh
$ sudo rm -rf /Library/Developer/CommandLineTools
$ xcode-select --install
```
