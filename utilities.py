# import require library for preprocess
import mne
import numpy as np
from mne.channels import make_standard_montage
import matplotlib.pyplot as plt
from mne.datasets import eegbci
import scipy
import pickle
import seaborn as sns

# import require library for classification
from sklearn.svm import SVC # SVM library
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis # LDA library
from sklearn.neighbors import KNeighborsClassifier # KNN library
from sklearn.model_selection import train_test_split, GridSearchCV, KFold

from sklearn.metrics import classification_report,confusion_matrix # Result representation

class AllFunction:
    def __init__():
        pass
    