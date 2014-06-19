signin('TestBot', 'r1neazxo9w')

%phase 
x = 0.5; 
%f1 
f1 = exp(1i*x); 
%f2 
f2 = 2*cos(x); 
%plot the output
fig = figure('Color','w'); 
hold on
%title
title('exp(ix)  + exp(-ix) = 2cos(x) [x = 0.5]','FontSize',12); 
%xlabel
xlabel('real')
%ylabel
ylabel('imaginary')
%plot unit circle 
uc = plot(cos(0:0.01:2*pi),sin(0:0.01:2*pi),'LineStyle','--','Color','k','LineWidth',3);
%plot yaxis
%line([0 0], [-2 2],'Color','k','LineWidth',1,'LineStyle','-'); 
%plot xaxis
%line([-2 2], [0 0],'Color','k','LineWidth',1,'LineStyle','-');  
%x/y axis range
axis([-2 2 -2 2]); 
%f1 color
f1col = [25 204 105]/255; 
%f1invcol
f1invcol = [22, 53, 252]/255; 
%vecsumcol
sumveccol = [153, 51, 102]/255; 
%plot f1 
f1line = line([0 real(f1)],[0 imag(f1)],'Color',f1col,'LineWidth',6); 
%plot f1 inverse
f1invline = line([0 real(f1^(-1))],[0 imag(f1^-1)],'Color',f1invcol,'LineWidth',6);
%plot sum of f1 and f1 inverse
sumline1 = line([real(f1) real(f1)+real(f1^-1)],[imag(f1) imag(f1)+imag(f1^-1)],'Color',f1invcol,'LineStyle','--','LineWidth',2);
%plot sum of f1 and f1 inverse alternate
sumline2 = line([real(f1^-1) real(f1)+real(f1^-1)],[imag(f1^-1) imag(f1)+imag(f1^-1)],'Color',f1col,'LineStyle','--','LineWidth',2);
%plot resulting vector of sum of f1 and f1 inverse
sumvec = line([0 real(f1)+real(f1^-1)],[0 imag(f1)+imag(f1^-1)],'Color',sumveccol,'LineStyle','--','LineWidth',2);
%marker the result (f2)
result = plot(f2,0,'o','MarkerSize',10,'Color',sumveccol,'LineWidth',2); 

%legend labels
labels= {'Unit Circle','exp(ix)','exp(-ix)','2cos(x)'}; 
%legend
legend([uc f1line f1invline result],labels,'Location','BestOutside') 

%turn on the axis binding box 
set(gca,'box','on'); 

%PLOTLY 
response = fig2plotly(fig);
plotly_url = response.url;
