all: compiler install update
compiler:; yarn add huffc@$(version) 
install:; forge install
update:; forge update
