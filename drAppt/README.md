# medicalRecords

** NEW PATIENT **
INSERT into patients (name, age, gender, height_cm) VALUES ('Steve', 34, 'male', 182);

** NEW DOCTOR **
INSERT into patients (name, age, gender, hospital) VALUES ('David', 52, 'male', 3);

** NEW HOSPITAL **
INSERT into patients (name, location) VALUES ('Surgery General', '453 West Operation Lane, Tulsa, OK 23465');

** NEW APPOINTMENT **
INSERT into patients (patient_id, doctor_id, time) VALUES (1, 3, 1430);
