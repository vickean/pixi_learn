import { networkInterfaces } from 'os';

export const getLocalIP = () => {
  const nets = networkInterfaces();
  const results = {};

  Object.keys(nets).forEach((name) => {
    nets[name].forEach((net) => {
      if (
        net.family === 'IPv4' &&
        !net.internal &&
        net.netmask === '255.255.255.0'
      ) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    });
  });

  return Object.values(results)[0][0];
};
