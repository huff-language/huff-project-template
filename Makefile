all: compiler install update
compiler:; curl -L get.huff.sh | bash
install:; forge install
update:; forge update
