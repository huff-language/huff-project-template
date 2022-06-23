all: huffc ts-node update
huffc:; yarn global add huffc@$(version) 
ts-node:; yarn global add ts-node
update:; forge update
