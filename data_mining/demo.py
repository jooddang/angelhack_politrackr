print(__doc__)
from pandas import *
import pandas as pd
import numpy as np
import pylab as pl
from sklearn import svm
from pandas import read_csv

import os
import math
import csv
import numpy as np
import time
import numpy
import scipy
import matplotlib
import sklearn

from sklearn import svm
from sklearn import cross_validation
from sklearn.ensemble import AdaBoostClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import ExtraTreesRegressor 
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.ensemble import ExtraTreesClassifier


iris = datasets.load_iris()
digits = datasets.load_digits()

random_state = np.random.RandomState(0)

# Size of data file
nrows = 457  # Update number of rows 
ncols = 6   # Update number of columns to use as predictors here
index = 0
data = np.zeros([nrows,ncols],dtype=float)
label = np.zeros([nrows,1],dtype=int)


# Read csv file
infile = open('C:\\NNpaper\expiry2.csv', 'rt', newline='')

readdata = csv.reader(infile)


header = next(readdata)  # Read header row

for row in readdata:
    data[index] = [row[2],row[3],row[4],row[5],row[6],row[7]]
    label[index] = [row[1]]
    index +=1

y_train = np.array(label)
y = np.array(label)
X_train = np.array(data)


for row in range(0,457):
    if y_train[row]==100:
        y_train[row]=1
    else:
        y_train[row]=-1

infile.close()

print(y_train)
print(X_train)

##Test file
infile2 = open('C:\\NNpaper\demo.csv', 'rt', newline='')
readdata = csv.reader(infile2)

# Size of data file
nrows = 9  # Update number of rows 
ncols = 6   # Update number of columns to use as predictors here
index = 0
data = np.zeros([nrows,ncols],dtype=float)
label = np.zeros([nrows,1],dtype=int)



header2 = next(readdata)  # Read header row

for row in readdata:
    data[index] = [row[2],row[3],row[4],row[5],row[6],row[7]]
    label[index] = [row[1]]
    index +=1

X_test = np.array(data)
print(X_test)
infile2.close()

#Run classifier Extra Random Trees Classifier model
clf = ExtraTreesClassifier(n_estimators=1000, max_depth=None,
   min_samples_split=1, random_state=0)
result = clf.fit(X_train, y_train).predict(X_test)
print(result)

##Run Regression Model
clf2 = ExtraTreesRegressor(n_estimators=1000, criterion='mse', max_depth=None, min_samples_split=2, min_samples_leaf=1, max_features='auto',
                           bootstrap=False, oob_score=False, n_jobs=1)
prob = clf2.fit(X_train, y).predict(X_test)
print(prob)

