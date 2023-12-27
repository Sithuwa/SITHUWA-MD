FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Sithuwa/SITHUWA-MD /root/sithuwa-md
WORKDIR /root/sithuwa-md/
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
