all: install-huffc update
install-huffc:; yarn global add huffc@$(version) ts-node
update:; forge update
