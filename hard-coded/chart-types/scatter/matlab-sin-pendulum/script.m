m = 5.0; l = 0.5; g = 9.81; b = 1.3;
x0 = [-0.2; 0.1];
tmax = 5;
xk = x0; T = 0.01;

plot(0,xk(1),'o');
hold;

for k = 1:tmax/T,			
   Torque = sin(pi*k*T);
   xk(1) = xk(1) + T*xk(2);
   xk(2) = xk(2) + T/(m*l*l)*(Torque - b*xk(2) - m*g*l*sin(xk(1)));
   plot(k*T,xk(1),'o');
end;
hold;

xlabel('t ');
ylabel('y[k] = theta[k]');
title('Pendulum Position for Sinusoidal Input');
grid;

fig2plotly();