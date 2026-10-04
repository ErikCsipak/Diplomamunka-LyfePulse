# LyfePulse
-_just a beat away_-

An ionic project to monitor bloodtests, and generate statistics and AI suggestions for users.

LyfePulse Backend is a Quarkus backend application, that is set-up to provide generic, stable and configurable server to provide services for LyfePulse Frontends.

The application complies with the following requirements:

# Authentication and authorization

The application uses **Google services** and basic auth for authentication (“Who is the user?”). And **the backend handles authorization**  (“What can the user do?”).

Roles are thus stored in the database and can be:
- ADMIN - identifies the admin user, that can grant or revoke roles to other users
- LICENSED_PERSONA - identifies doctors, nurses, and other medical professionals that are licensed to access patient data
- PATIENT - identifies patients that are registered to the system and can access their own data

## Licensed_persona services
- Can register or login to the system using Google services or basic auth
- Can request licensed_persona role from the admin, and the admin can grant or revoke the role
- Can send requests to patient to access their data
- Can read patient data, if the patient has granted access to the licensed_persona
- Can read their own data, and update their own profile
- Can read their own patients, and update their own patients' data, if the patient has granted access to the licensed_persona

## Patient services
- Can register or login to the system using Google services or basic auth
- Can read their own data, and update their own profile.
- Can read their list of licensed_personas to whom they have granted access to their data, and revoke access if needed.
- Can add new bloodtests, remove bloodtests, and update their existing bloodtests.
- Can read statistics and AI suggestions based on their bloodtests.

The application complies with the FHIR standard and uses the Observation resource to store bloodtests.

# Data structure

## User
- hc_id: healthcare id - unique identifier for the user
- first_name: user's first name
- last_name: user's last name
- date_of_birth: user's date of birth
- gender: user's gender
- email: user's email address
- role: user's role in the system (ADMIN, LICENSED_PERSONA, PATIENT)

## Role
- role_id: unique identifier for the role
- role_name: name of the role (ADMIN, LICENSED_PERSONA, PATIENT)
- permissions: list of permissions associated with the role
- description: description of the role

## Permission
- permission_id: unique identifier for the permission
- functionality: functionality associated with the permission (e.g. MY_PROFILE_DATA, MY_BLOODTESTS_DATA, STATISTICS_DATAd)
- permission_name: name of the permission (READ, WRITE, UPDATE, DELETE)
- description: description of the permission